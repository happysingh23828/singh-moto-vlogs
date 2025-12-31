import Link from 'next/link'

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@singh_moto_vlogs',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: '#ff0000'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/singh_moto_vlogs',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C8.396 0 7.609.043 6.298.104c-1.31.061-2.205.265-2.99.565a5.893 5.893 0 0 0-2.137.884A5.893 5.893 0 0 0 .57 3.635c-.3.785-.504 1.68-.565 2.99C.043 7.609 0 8.396 0 12.017s.043 4.408.104 5.719c.061 1.31.265 2.205.565 2.99a5.893 5.893 0 0 0 .884 2.137 5.893 5.893 0 0 0 2.137.884c.785.3 1.68.504 2.99.565 1.31.061 2.097.104 5.719.104s4.408-.043 5.719-.104c1.31-.061 2.205-.265 2.99-.565a5.893 5.893 0 0 0 2.137-.884 5.893 5.893 0 0 0 .884-2.137c.3-.785.504-1.68.565-2.99.061-1.31.104-2.097.104-5.719s-.043-4.408-.104-5.719c-.061-1.31-.265-2.205-.565-2.99a5.893 5.893 0 0 0-.884-2.137A5.893 5.893 0 0 0 21.005.569c-.785-.3-1.68-.504-2.99-.565C16.425.043 15.638 0 12.017 0zm0 1.864c3.539 0 3.955.014 5.351.078 1.297.062 1.996.276 2.455.458a4.029 4.029 0 0 1 1.453 1.453c.182.459.396 1.158.458 2.455.064 1.396.078 1.812.078 5.351s-.014 3.955-.078 5.351c-.062 1.297-.276 1.996-.458 2.455a4.029 4.029 0 0 1-1.453 1.453c-.459.182-1.158.396-2.455.458-1.396.064-1.812.078-5.351.078s-3.955-.014-5.351-.078c-1.297-.062-1.996-.276-2.455-.458a4.029 4.029 0 0 1-1.453-1.453c-.182-.459-.396-1.158-.458-2.455C1.879 15.972 1.865 15.556 1.865 12.017s.014-3.955.078-5.351c.062-1.297.276-1.996.458-2.455a4.029 4.029 0 0 1 1.453-1.453c.459-.182 1.158-.396 2.455-.458 1.396-.064 1.812-.078 5.351-.078zm0 2.796a7.151 7.151 0 1 0 0 14.302 7.151 7.151 0 0 0 0-14.302zm0 11.772a4.621 4.621 0 1 1 0-9.242 4.621 4.621 0 0 1 0 9.242zm7.717-10.286a1.674 1.674 0 1 1-3.348 0 1.674 1.674 0 0 1 3.348 0z"/>
      </svg>
    ),
    color: '#e4405f'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61585615797386',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: '#1877f2'
  }
]

export default function Footer() {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="footer" className="text-center px-5 py-16" style={{ backgroundColor: '#0a0a0a', color: '#b3b3b3' }}>
      <div className="max-w-4xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-110"
              style={{ color: social.color }}
              title={`Follow on ${social.name}`}
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Quote */}
        <div className="mb-8">
          <p className="text-lg sm:text-xl italic mb-4 font-medium" style={{ color: '#f5f5f5' }}>
            "Zindagi ke maze lete raho, warna zindagi tumhare maze legi"
          </p>
          <p className="text-base" style={{ color: '#ff4d00' }}>
            ज़िंदगी के मज़े लेते रहो, वरना ज़िंदगी तुम्हारे मज़े लेगी
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 mb-2">
            © 2026 <span style={{ color: '#ff4d00' }}>Singh Moto Vlogs</span>
          </p>
          <p className="text-sm text-gray-500">
            Built with ❤️ for the motorcycle community
          </p>
        </div>
      </div>
    </footer>
  )
}
