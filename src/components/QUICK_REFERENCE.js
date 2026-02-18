// ============================================
// QUICK REFERENCE - Keep this open while writing!
// ============================================

/**
 * STEP 1: Import helpers at the top of blogData.js
 */
import { createImage, createHighlight, createSQLQuery, createCodeBlock, createInlineCode } from './blogTemplate';

/**
 * STEP 2: Add your post to the blogPosts array
 */
const myNewPost = {
  slug: 'url-friendly-title',
  title: 'Your Blog Title',
  date: '18/02/2026',
  excerpt: 'Short summary for the blog list page',
  content: `
    <p>Write your content here...</p>
    
    <h2>Use h2 for main sections</h2>
    <h3>Use h3 for subsections</h3>
    
    <p>Use helper functions below...</p>
  `
};

/*
// ============================================
// HELPER FUNCTIONS - Copy & Paste These!
// ============================================

// 📸 IMAGE (auto-sized, consistent styling)
${createImage('/Art/your-image.jpg', 'Image description', 'Optional caption')}

// 💡 TIP BOX (green)
${createHighlight('💡 <strong>Tip:</strong> Your helpful tip here', 'tip')}

// ℹ️ INFO BOX (blue)
${createHighlight('ℹ️ <strong>Note:</strong> Important information', 'info')}

// ⚠️ WARNING BOX (yellow)
${createHighlight('⚠️ <strong>Warning:</strong> Be careful with this', 'warning')}

// ✅ SUCCESS BOX (green)
${createHighlight('✅ <strong>Success:</strong> It worked!', 'success')}

// 🗄️ SQL QUERY (dark theme with blue border)
${createSQLQuery(`SELECT 
    column1,
    column2
FROM 
    table_name
WHERE 
    condition = 'value';`)}

// 💻 CODE BLOCK (dark theme, specify language)
${createCodeBlock(`function example() {
  return true;
}`, 'javascript')}

// 📝 INLINE CODE (use in sentences)
Use ${createInlineCode('inline code')} like this

// ============================================
// REGULAR HTML - Use These Too!
// ============================================

// Heading 2
<h2>main section heading</h2>

// Heading 3
<h3>subsection heading</h3>

// Paragraph
<p>Your paragraph text here...</p>

// Unordered List
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>

// Ordered List
<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>

// Link (external)
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Link Text</a>

// Link (internal)
<a href="/projects">Link Text</a>

// Bold
<strong>bold text</strong>

// Italic
<em>italic text</em>

*/

/*
// ============================================
// COMPLETE TEMPLATE
// ============================================

export const templatePost = {
  slug: 'my-blog-post',
  title: 'my awesome blog post',
  date: '18/02/2026',
  excerpt: 'A short description of what this post is about...',
  
  content: `
    <p>
      introduction paragraph goes here. explain what you'll cover in this post.
    </p>

    ${createHighlight('💡 <strong>What you\'ll learn:</strong> List the key takeaways here', 'info')}

    <h2>first main section</h2>
    
    <p>
      explain your first main point here...
    </p>

    ${createCodeBlock(`// Your code example
const example = true;`, 'javascript')}

    <h2>second main section</h2>
    
    <p>
      more content here. maybe add an image:
    </p>

    ${createImage('/Art/screenshot.png', 'Screenshot description', 'Optional caption text')}

    <h3>subsection if needed</h3>
    
    <p>
      detailed explanation...
    </p>

    ${createSQLQuery(`SELECT * FROM users WHERE active = 1;`)}

    ${createHighlight('⚠️ <strong>Warning:</strong> Important warning here', 'warning')}

    <h2>conclusion</h2>
    
    <p>
      wrap up your post and encourage engagement.
    </p>

    <p>
      questions? reach out at <a href="https://linuxusers.in/sarthak" target="_blank" rel="noopener noreferrer">@sarthak@linuxusers.in</a>.
    </p>
  `
};

*/

// Save this file and refer to it whenever you write a new blog post!
export default {};
