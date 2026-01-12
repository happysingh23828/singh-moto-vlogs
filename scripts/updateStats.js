const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables (in production, use actual env vars)
require('dotenv').config({ path: '.env.local' });

// Configuration
const STATS_FILE = path.join(__dirname, '..', 'data', 'stats.json');

// YouTube API Configuration
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || 'YOUR_YOUTUBE_API_KEY';
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'YOUR_CHANNEL_ID';

// Instagram API Configuration
const META_GRAPH_TOKEN = process.env.META_GRAPH_TOKEN || 'YOUR_INSTAGRAM_TOKEN';
const IG_BUSINESS_ID = process.env.IG_BUSINESS_ID || '17841460269360588';

// Environment variables loaded successfully

// Helper function to make HTTPS requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Fetch YouTube channel statistics
async function fetchYouTubeStats() {
  try {
    let url;
    // Check if it's a handle (starts with @) or ID
    if (YOUTUBE_CHANNEL_ID.startsWith('@')) {
      // Use forHandle parameter for @handles
      const handle = YOUTUBE_CHANNEL_ID.substring(1); // Remove @
      url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forHandle=${handle}&key=${YOUTUBE_API_KEY}`;
    } else {
      // Use id parameter for channel IDs
      url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
    }

    console.log('YouTube API URL:', url.replace(YOUTUBE_API_KEY, 'API_KEY_HIDDEN'));
    const data = await makeRequest(url);

    if (data.items && data.items[0]) {
      const channel = data.items[0];
      return {
        title: channel.snippet.title,
        avatar: channel.snippet.thumbnails.high.url,
        subscribers: parseInt(channel.statistics.subscriberCount) || 0,
        views: parseInt(channel.statistics.viewCount) || 0
      };
    }
    throw new Error('Channel not found');
  } catch (error) {
    console.error('YouTube API Error:', error.message);
    // Return fallback data
    return {
      title: "Singh Moto Vlogs",
      avatar: "https://yt3.googleusercontent.com/default-avatar.jpg",
      subscribers: 0,
      views: 0
    };
  }
}

// Fetch Instagram account statistics
async function fetchInstagramStats() {
  try {
    // First, get basic account info
    const accountUrl = `https://graph.instagram.com/${IG_BUSINESS_ID}?fields=followers_count,media_count&access_token=${META_GRAPH_TOKEN}`;
    const accountData = await makeRequest(accountUrl);

    // Fetch all media and calculate total views
    let totalViews = 0;
    let allMedia = [];
    let nextUrl = `https://graph.instagram.com/${IG_BUSINESS_ID}/media?fields=id,media_type,view_count&access_token=${META_GRAPH_TOKEN}&limit=100`;

    try {
      console.log('Fetching all Instagram media to calculate total views...');

      // Paginate through all media
      while (nextUrl && allMedia.length < 1000) { // Limit to 1000 posts to avoid excessive API calls
        const mediaData = await makeRequest(nextUrl);
        console.log(`Fetched ${mediaData.data ? mediaData.data.length : 0} media items, total so far: ${allMedia.length}`);

        if (mediaData.data) {
          allMedia.push(...mediaData.data);
        }

        // Check if there's a next page
        nextUrl = mediaData.paging && mediaData.paging.next ? mediaData.paging.next : null;
      }

      console.log(`Total media items fetched: ${allMedia.length}`);

      // Calculate total views by calling insights API for each video
      console.log('Fetching insights for video content...');
      const videos = allMedia.filter(post => post.media_type === 'VIDEO'); // Get all videos
      console.log(`Found ${videos.length} video posts to check`);

      const videoPromises = videos.map(async (post) => {
        try {
          console.log(`Checking insights for video: ${post.id}`);
          const insightsUrl = `https://graph.instagram.com/${post.id}/insights?metric=views&access_token=${META_GRAPH_TOKEN}`;
          console.log(`Insights URL: ${insightsUrl.replace(META_GRAPH_TOKEN, 'TOKEN_HIDDEN')}`);

          const insightsData = await makeRequest(insightsUrl);
          console.log(`Insights response for ${post.id}:`, JSON.stringify(insightsData, null, 2));

          if (insightsData.data && insightsData.data[0] && insightsData.data[0].values && insightsData.data[0].values[0]) {
            const views = parseInt(insightsData.data[0].values[0].value);
            console.log(`Video ${post.id}: ${views} views`);
            return views;
          }
          console.log(`No view data found for video ${post.id}`);
          return 0;
        } catch (error) {
          console.log(`Failed to get insights for video ${post.id}:`, error.message);
          return 0;
        }
      });

      const videoViews = await Promise.all(videoPromises);
      totalViews = videoViews.reduce((sum, views) => sum + views, 0);
      console.log(`Final total views: ${totalViews}`);

      console.log(`Total Instagram views calculated: ${totalViews}`);

    } catch (mediaError) {
      console.log('Error fetching media views:', mediaError.message);
      totalViews = 0;
    }

    return {
      followers: accountData.followers_count || 0,
      posts: accountData.media_count || 0,
      views: totalViews
    };
  } catch (error) {
    console.error('Instagram API Error:', error.message);
    // Return fallback data
    return {
      followers: 1220,
      posts: 0,
      views: 0
    };
  }
}

// Main function to update stats
async function updateStats() {
  console.log('🔄 Updating social media stats...');

  try {
    // Fetch data from both platforms
    const [youtubeData, instagramData] = await Promise.all([
      fetchYouTubeStats(),
      fetchInstagramStats()
    ]);

    // Prepare updated stats
    const updatedStats = {
      youtube: youtubeData,
      instagram: instagramData,
      lastUpdated: new Date().toISOString()
    };

    // Write to file
    fs.writeFileSync(STATS_FILE, JSON.stringify(updatedStats, null, 2));
    console.log('✅ Stats updated successfully!');
    console.log('📊 YouTube:', youtubeData.subscribers, 'subscribers,', youtubeData.views, 'views');
    console.log('📸 Instagram:', instagramData.followers, 'followers,', instagramData.posts, 'posts,', instagramData.views, 'total views');

  } catch (error) {
    console.error('❌ Error updating stats:', error.message);
  }
}

// Run if called directly
if (require.main === module) {
  updateStats();
}

module.exports = { updateStats, fetchYouTubeStats, fetchInstagramStats };
