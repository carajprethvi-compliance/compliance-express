# Compliance Express Website

A modern, responsive website for Compliance Express with download functionality for the desktop application.

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional design with smooth animations
- **Download Section**: Separate download links for Windows and macOS versions
- **Smooth Navigation**: Single-page application with smooth scrolling
- **Notification System**: User feedback for download actions

## Files Structure

```
WEB/
├── index.html      # Main website
├── styles.css      # Styling and layout
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Getting Started

1. **Local Development**: Open `index.html` in your web browser
2. **Web Hosting**: Upload all files to your web hosting service
3. **Domain**: Point `complianceexpress.co.in` to your hosting

## Hosting Solutions for Large Files

Given your 0.12 Mbps upload speed and 20MB+ files, here are recommended hosting platforms:

### 1. **Google Drive** (Recommended)
- **Free storage**: 15GB (upgradeable)
- **Upload once**: Share direct download links
- **Fast delivery**: Google's CDN ensures quick downloads
- **Setup**: Upload ZIP files, get shareable links, update `script.js`

### 2. **OneDrive** (Microsoft)
- **Free storage**: 5GB (upgradeable)
- **Direct links**: Generate download URLs
- **Integration**: Works well with Windows users
- **Setup**: Similar to Google Drive

### 3. **Dropbox**
- **Free storage**: 2GB (upgradeable)
- **Simple sharing**: Direct download links
- **Reliable**: Good uptime and speed
- **Setup**: Upload files and create shared links

### 4. **GitHub Releases**
- **Free**: Unlimited storage for public repositories
- **Version control**: Track different app versions
- **CDN**: Fast delivery via GitHub's network
- **Setup**: Create repository, upload as releases

### 5. **Cloudflare R2**
- **Very affordable**: $0.015 per GB/month
- **Global CDN**: Fast delivery worldwide
- **Scalable**: Pay only for what you use
- **Setup**: Create account, upload files, get URLs

## Updating Download Links

To update the download URLs in your website:

1. **Upload your files** to your chosen hosting platform
2. **Get the direct download links**
3. **Open `script.js`** and update these lines:

```javascript
const downloadUrls = {
    windows: 'YOUR_WINDOWS_DOWNLOAD_URL_HERE',
    mac: 'YOUR_MACOS_DOWNLOAD_URL_HERE'
};
```

## Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Point your domain to GitHub Pages

### Option 2: Netlify (Free)
1. Create Netlify account
2. Connect your repository or drag & drop files
3. Automatic deployment with CDN
4. Free SSL certificate

### Option 3: Vercel (Free)
1. Create Vercel account
2. Connect repository or deploy manually
3. Automatic deployments
4. Global CDN included

## Customization

- **Colors**: Edit CSS variables in `styles.css`
- **Content**: Update text in `index.html`
- **Contact Info**: Modify contact details in the contact section
- **Branding**: Replace logo and company information

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Fast loading**: Optimized images and code
- **Mobile-first**: Responsive design
- **SEO friendly**: Semantic HTML structure

## Support

For technical support or customization requests:
- Email: support@complianceexpress.co.in
- Phone: +91-9876543210

---

**Note**: Remember to update the download URLs in `script.js` once you have your files hosted on your chosen platform.
