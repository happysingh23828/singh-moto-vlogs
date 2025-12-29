/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'yt3.googleusercontent.com', // YouTube avatars
      'yt3.ggpht.com', // YouTube thumbnails
      'scontent.cdninstagram.com', // Instagram images
      'instagram.fdel1-1.fna.fbcdn.net', // Instagram CDN
      'graph.instagram.com', // Instagram Graph API
      'images.unsplash.com', // Stock images
      'via.placeholder.com', // Placeholder images
      'avatars.githubusercontent.com', // GitHub avatars (if needed)
    ],
  },
}

module.exports = nextConfig
