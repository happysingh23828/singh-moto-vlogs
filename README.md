# Singh Moto Vlogs - Premium Creator Portfolio

A modern, static creator portfolio website for Singh Moto Vlogs built with Next.js, Tailwind CSS, and real-time social media statistics.

## 🚀 Features

- **Modern Design**: Clean, responsive design with gradients and smooth animations
- **Real-time Stats**: Live YouTube and Instagram follower counts
- **Static Generation**: Server-side rendered for optimal performance
- **Mobile-First**: Fully responsive across all devices
- **SEO Optimized**: Meta tags and structured data included

## 🛠 Tech Stack

- **Next.js 12** - App Router
- **Tailwind CSS** - Utility-first styling
- **React 18** - Component library
- **Node.js** - Server-side scripting

## 📁 Project Structure

```
singh-moto-vlogs/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js           # Root layout component
│   └── page.js             # Homepage component
├── components/
│   ├── Hero.jsx            # Hero section with profile image
│   ├── Stats.jsx           # Social media statistics
│   ├── About.jsx           # About section
│   └── Links.jsx           # Social media links
├── data/
│   └── stats.json          # Social media statistics (JSON source of truth)
├── scripts/
│   └── updateStats.js      # Cron script to update social stats
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ (preferably 16+)
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   # YouTube Data API v3
   YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY_HERE
   YOUTUBE_CHANNEL_ID=YOUR_YOUTUBE_CHANNEL_ID_HERE

   # Instagram Graph API
   META_GRAPH_TOKEN=YOUR_INSTAGRAM_ACCESS_TOKEN_HERE
   IG_BUSINESS_ID=17841460269360588
   ```

3. **Update social media statistics:**
   ```bash
   npm run update-stats
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📊 Social Media Integration

### YouTube Data API v3

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable YouTube Data API v3
4. Create credentials (API Key)
5. Get your channel ID from YouTube Studio

### Instagram Graph API

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create a Facebook app
3. Add Instagram Basic Display product
4. Generate access token
5. Get your Instagram Business Account ID

## 🔄 Updating Statistics

The stats are stored in `data/stats.json` and updated via a cron script:

```bash
# Manual update
npm run update-stats

# Set up daily cron job (example for Linux/Mac)
crontab -e
# Add: 0 9 * * * cd /path/to/project && npm run update-stats
```

## 🎨 Customization

### Colors & Branding

Update `tailwind.config.js` to customize colors:

```js
theme: {
  extend: {
    colors: {
      'brand': {
        50: '#f0f9ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      },
    },
  },
}
```

### Content

Edit the following files to customize content:
- `components/Hero.jsx` - Hero section content
- `components/About.jsx` - About section content
- `components/Links.jsx` - Social media links

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or collaborations:
- Email: singh.motovlogs@gmail.com
- Instagram: [@singhmotovlogs](https://instagram.com/singhmotovlogs)
- YouTube: [@singhmotovlogs](https://youtube.com/@singhmotovlogs)

---

Built with ❤️ for the motorcycle community by Singh Moto Vlogs
