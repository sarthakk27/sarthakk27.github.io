# Blog Management Guide

## Quick Start: Adding a New Blog Post

### Step 1: Open blogData.js
Navigate to: `src/components/blogData.js`

### Step 2: Import Helper Functions
At the top of the file, add:
```javascript
import { createImage, createHighlight, createSQLQuery, createCodeBlock, createInlineCode } from './blogTemplate';
```

### Step 3: Add Your Blog Post to the Array
Add a new object to the `blogPosts` array:

```javascript
export const blogPosts = [
  // Your existing posts...
  
  // Add your new post here:
  {
    slug: 'my-new-blog-post',           // URL-friendly (use-hyphens)
    title: 'my amazing blog post',      // Display title  
    date: '18/02/2026',                 // Format: DD/MM/YYYY
    excerpt: 'A short summary...',      // Shows on blog list page
    
    content: `
      <p>Your introduction goes here...</p>
      
      <h2>main heading</h2>
      <p>Regular paragraph text...</p>
      
      ${createHighlight('💡 This is a tip!', 'tip')}
      
      ${createSQLQuery('SELECT * FROM users;')}
      
      <p>More content...</p>
    `
  }
];
```

---

## Helper Functions Reference

### 1. Images (Auto-sized)
```javascript
${createImage('/photos/image.jpg', 'Alt text', 'Optional caption', 'medium')}
```

**Size Options:**
- `'small'` - Max 300px height (good for icons/small screenshots)
- `'medium'` - Max 500px height (default, good for most images)
- `'large'` - Max 700px height (good for detailed screenshots)
- `'full'` - Full width, no height limit (use sparingly)

**Examples:**
```javascript
// Small image
${createImage('/photos/icon.png', 'Icon', '', 'small')}

// Medium (default) - can omit size parameter
${createImage('/photos/screenshot.png', 'Screenshot', 'Main dashboard')}

// Large image for detailed view
${createImage('/photos/detailed.png', 'Details', 'Full configuration', 'large')}

// Full size
${createImage('/photos/banner.png', 'Banner', '', 'full')}
```

- **Place images in:** `public/photos/` folder (NOT src/photos/)
- All images automatically maintain aspect ratio
- Consistent styling across all posts

### 2. Highlight Boxes
```javascript
${createHighlight('Your message here', 'type')}
```
**Types:**
- `'info'` - Blue box (general information)
- `'tip'` - Green box (helpful tips)
- `'warning'` - Yellow box (warnings/cautions)
- `'success'` - Green box (success messages)

**Examples:**
```javascript
${createHighlight('💡 <strong>Tip:</strong> This is helpful!', 'tip')}
${createHighlight('⚠️ <strong>Warning:</strong> Be careful!', 'warning')}
${createHighlight('✅ <strong>Success:</strong> It worked!', 'success')}
```

### 3. SQL Queries (Dark Theme)
```javascript
${createSQLQuery(`SELECT 
    column1,
    column2
FROM 
    table_name
WHERE 
    condition = 'value';`)}
```
- Automatic dark background
- Blue accent border
- Syntax-friendly styling

### 4. Code Blocks
```javascript
${createCodeBlock(`function example() {
  return true;
}`, 'javascript')}
```
**Supported languages:** javascript, python, bash, sql, java, etc.

### 5. Inline Code
```javascript
Use ${createInlineCode('inline code')} in your sentences.
```
- Pink highlight
- Monospace font

---

## Content Formatting

### Headings
```html
<h2>main section</h2>
<h3>subsection</h3>
```

### Paragraphs
```html
<p>Your paragraph text here...</p>
```

### Lists
**Unordered:**
```html
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>
```

**Ordered:**
```html
<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>
```

### Links
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Link Text</a>
```

---

## Complete Example

```javascript
{
  slug: 'setup-react-app',
  title: 'how to setup a react app',
  date: '18/02/2026',
  excerpt: 'learn how to create a modern react application from scratch.',
  
  content: `
    <p>
      setting up a react application is easier than ever. in this guide,
      i'll show you the modern way to get started.
    </p>

    ${createHighlight('💡 <strong>Prerequisites:</strong> Node.js 16+ and npm installed', 'info')}

    <h2>installation steps</h2>
    
    <p>first, create your app using ${createInlineCode('create-react-app')}:</p>

    ${createCodeBlock(`npx create-react-app my-app
cd my-app
npm start`, 'bash')}

    ${createImage('/photos/react-logo.png', 'React logo', 'The official React logo')}

    <h2>project structure</h2>
    
    <ul>
      <li><strong>src/</strong> - your source code</li>
      <li><strong>public/</strong> - static assets</li>
      <li><strong>package.json</strong> - dependencies</li>
    </ul>

    ${createHighlight('✅ <strong>Success!</strong> Your React app is now running on localhost:3000', 'success')}

    <h2>conclusion</h2>
    
    <p>
      you now have a fully functional react application. happy coding!
    </p>
  `
}
```

---

## Tips for Great Blog Posts

1. **Use descriptive slugs** - `connecting-pentaho-sql-server` not `post-1`
2. **Write clear excerpts** - This is what users see on the blog list page
3. **Use headings** - Break up content with `<h2>` and `<h3>` tags
4. **Add visual interest** - Use highlights, images, and code blocks
5. **Keep paragraphs short** - Easier to read on screens
6. **Test formatting** - Preview your post before publishing

---

## Need More Examples?

Check out `blogExample.js` for a complete, real-world example of a technical blog post using all the helper functions!
