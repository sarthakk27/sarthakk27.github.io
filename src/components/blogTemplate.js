// ============================================
// BLOG TEMPLATE & HELPER FUNCTIONS
// ============================================
// Use these helper functions to create well-formatted blog content easily

/**
 * Helper function to create an image block with consistent sizing
 * @param {string} src - Image URL or path (place images in src/Art/ folder)
 * @param {string} alt - Alt text for accessibility
 * @param {string} caption - Optional caption below the image
 */
export const createImage = (src, alt, caption = '') => {
  return `
    <figure class="blog-image">
      <img src="${src}" alt="${alt}" />
      ${caption ? `<figcaption>${caption}</figcaption>` : ''}
    </figure>
  `;
};

/**
 * Helper function to create a highlighted/callout box
 * @param {string} content - The text to highlight
 * @param {string} type - Type of highlight: 'info', 'warning', 'success', 'tip'
 */
export const createHighlight = (content, type = 'info') => {
  return `<div class="highlight highlight-${type}">${content}</div>`;
};

/**
 * Helper function to create a SQL query block
 * @param {string} query - The SQL query
 */
export const createSQLQuery = (query) => {
  return `<pre class="sql-query"><code>${query}</code></pre>`;
};

/**
 * Helper function to create a code block
 * @param {string} code - The code content
 * @param {string} language - Language for syntax reference (e.g., 'javascript', 'python', 'bash')
 */
export const createCodeBlock = (code, language = '') => {
  return `<pre class="code-block" data-language="${language}"><code>${code}</code></pre>`;
};

/**
 * Helper function to create an inline code snippet
 * @param {string} code - The inline code
 */
export const createInlineCode = (code) => {
  return `<code class="inline-code">${code}</code>`;
};

// ============================================
// BLOG POST TEMPLATE
// ============================================
// Copy this template to create a new blog post

export const blogPostTemplate = {
  slug: 'your-blog-url-slug',           // URL-friendly title (use hyphens)
  title: 'your blog title',             // Display title
  date: 'DD/MM/YYYY',                   // Date in DD/MM/YYYY format
  excerpt: 'A short description...',    // Brief summary (shows on blog list page)
  
  // Main content goes here - use the helper functions above for formatting
  content: `
    <p>
      Your introduction paragraph goes here...
    </p>

    <h2>main section heading</h2>
    
    <p>
      Regular paragraph text. You can include ${createInlineCode('inline code')} like this.
    </p>

    ${createHighlight('💡 <strong>Tip:</strong> This is an important note or tip for readers!', 'tip')}

    <h3>subsection</h3>
    
    <p>
      More content here...
    </p>

    ${createImage('/path/to/image.jpg', 'Description of image', 'Optional caption text')}

    <h2>code examples</h2>
    
    <p>
      Here's a code example:
    </p>

    ${createCodeBlock(`function example() {
  console.log('Hello, world!');
  return true;
}`, 'javascript')}

    <h2>database queries</h2>
    
    <p>
      For SQL queries, use the special SQL formatting:
    </p>

    ${createSQLQuery(`SELECT 
    column1,
    column2,
    COUNT(*) as total
FROM 
    your_table
WHERE 
    status = 'active'
GROUP BY 
    column1, column2
ORDER BY 
    total DESC;`)}

    ${createHighlight('⚠️ <strong>Warning:</strong> Make sure to backup your data before running this!', 'warning')}

    <h2>lists</h2>
    
    <p>
      Unordered list:
    </p>

    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>

    <p>
      Ordered list:
    </p>

    <ol>
      <li>Step one</li>
      <li>Step two</li>
      <li>Step three</li>
    </ol>

    <h2>conclusion</h2>
    
    <p>
      Your conclusion paragraph...
    </p>

    <p>
      Questions? Reach out at <a href="https://linuxusers.in/sarthak" target="_blank" rel="noopener noreferrer">@sarthak@linuxusers.in</a>.
    </p>
  `
};

// ============================================
// QUICK REFERENCE
// ============================================
/*

To add a new blog post:
1. Copy the blogPostTemplate above
2. Fill in slug, title, date, excerpt
3. Write your content using the helper functions
4. Add your new post object to the blogPosts array in blogData.js

Helper Functions:
- createImage(src, alt, caption) - For images
- createHighlight(content, type) - For callout boxes (types: info, warning, success, tip)
- createSQLQuery(query) - For SQL queries
- createCodeBlock(code, language) - For code blocks
- createInlineCode(code) - For inline code

Image Guidelines:
- Place images in the src/Art/ folder
- All images will automatically be sized consistently
- Use .jpg, .png, or .avif formats

Highlight Types:
- 'info' (blue) - General information
- 'tip' (green) - Helpful tips
- 'warning' (yellow/orange) - Warnings or cautions
- 'success' (green) - Success messages

*/
