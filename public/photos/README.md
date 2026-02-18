# 📸 Blog Images Folder

**Place all your blog images here!**

This is the correct location for blog post images. Images placed here will be accessible via absolute paths.

## Currently Referenced Images:
- `sqlServerManagerConfig.png` - SQL Server Configuration Manager interface
- `sharedMemory.png` - Shared Memory Protocol screenshot
- `tcpIp.png` - TCP/IP Protocol screenshot
- `tcpIpProperties.png` - TCP/IP Properties configuration
- `restartServices.png` - Restart SQL Server Services

## How to Add Images:

1. **Copy your image** to this directory: `public/photos/`
2. **Reference it in your blog post** using:
   ```javascript
   ${createImage('/photos/your-image.png', 'Alt text', 'Optional caption', 'medium')}
   ```

## Image Size Options:

Choose the size that best fits your content:

- **`'small'`** - Max 300px height (icons, small screenshots)
- **`'medium'`** - Max 500px height (default, most images)
- **`'large'`** - Max 700px height (detailed screenshots)
- **`'full'`** - Full width, no height limit (banners, wide images)

### Examples:

```javascript
// Small image (300px max height)
${createImage('/photos/icon.png', 'Icon', '', 'small')}

// Medium - default (500px max height) - can omit size parameter
${createImage('/photos/screenshot.png', 'Screenshot', 'Dashboard view')}

// Large (700px max height) - great for detailed screenshots
${createImage('/photos/detailed.png', 'Detailed view', 'Full config', 'large')}

// Full size (no height limit) - use for banners or wide images
${createImage('/photos/banner.png', 'Banner', '', 'full')}
```

## Supported Image Formats:
✅ `.png` (recommended for screenshots)  
✅ `.jpg` / `.jpeg` (good for photos)  
✅ `.avif` (modern, smaller files)  
✅ `.webp` (modern, smaller files)  
✅ `.gif` (for animations)

## Image Guidelines:
- **Screenshots**: Use PNG format for best quality
- **Photos**: Use JPG for smaller file sizes
- **File names**: Use descriptive names with hyphens (e.g., `sql-server-config.png`)
- **Aspect ratio**: All images maintain their original aspect ratio

## Why This Location?

In React apps:
- Files in `public/` are served as static assets
- They can be accessed directly via paths like `/photos/image.png`
- They don't need to be imported in your code
- Perfect for content that changes frequently (like blog images)

---

**Note:** Do NOT place images in `src/photos/` - they won't load. Always use this `public/photos/` folder!
