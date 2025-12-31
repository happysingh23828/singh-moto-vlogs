# Stats Update Setup (GitHub Actions)

## Overview
This project uses GitHub Actions to automatically update social media statistics daily at 12 AM IST.

## Setup Instructions

### 1. Add Repository Secrets to GitHub
Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:
- `YOUTUBE_API_KEY` - Your YouTube Data API v3 key
- `YOUTUBE_CHANNEL_ID` - Your YouTube channel ID or handle
- `META_GRAPH_TOKEN` - Your Instagram/Meta Graph API token
- `IG_BUSINESS_ID` - Your Instagram Business Account ID

### 2. How it Works
- **Schedule**: Runs daily at 12 AM IST (11:30 PM UTC)
- **Process**:
  1. Fetches latest YouTube stats (subscribers, views)
  2. Fetches latest Instagram stats (followers, posts)
  3. Updates `data/stats.json` with new data
  4. Commits and pushes changes to trigger Vercel deployment
- **Trigger**: Automatic daily + manual trigger available

### 3. Manual Testing
You can manually trigger the workflow:
1. Go to GitHub repository → Actions tab
2. Select "Update Social Media Stats" workflow
3. Click "Run workflow"

### 4. Monitoring
- Check the Actions tab for workflow runs
- Each successful run will create a commit with stats update
- Vercel will automatically redeploy when stats are updated

## API Keys Setup

### YouTube API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create/enable YouTube Data API v3
3. Create API key
4. Add to GitHub secrets as `YOUTUBE_API_KEY`

### Instagram/Meta API
1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create app with Instagram Basic Display
3. Generate access token
4. Add to GitHub secrets as `META_GRAPH_TOKEN`
5. Get your Instagram Business Account ID

## Troubleshooting
- Check workflow logs in GitHub Actions
- Verify all secrets are set correctly
- Manual trigger to test immediately
- Stats only update if data actually changes
