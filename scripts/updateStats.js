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
    const url = `https://graph.instagram.com/${IG_BUSINESS_ID}?fields=followers_count,media_count&access_token=${META_GRAPH_TOKEN}`;
    const data = await makeRequest(url);

    return {
      followers: data.followers_count || 0,
      posts: data.media_count || 0
    };
  } catch (error) {
    console.error('Instagram API Error:', error.message);
    // Return fallback data
    return {
      followers: 1220,
      posts: 0
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
    console.log('📸 Instagram:', instagramData.followers, 'followers');

  } catch (error) {
    console.error('❌ Error updating stats:', error.message);
  }
}

// Run if called directly
if (require.main === module) {
  updateStats();
}

module.exports = { updateStats, fetchYouTubeStats, fetchInstagramStats };
