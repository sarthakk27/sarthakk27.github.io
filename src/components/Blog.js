import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { blogPosts } from './blogData';

const Blog = () => {
  // Sort posts by date in descending order (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const parseDate = (dateStr) => {
      const [day, month, year] = dateStr.split('/');
      return new Date(year, month - 1, day);
    };
    return parseDate(b.date) - parseDate(a.date);
  });

  return (
    <div className="blog-container">
      <button className="back-button" onClick={() => window.history.back()}>
        ← Back
      </button>
      
      <div className="blog-header">
        <h1>blog</h1>
      </div>

      <div className="blog-posts-list">
        {sortedPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-post-item">
            <div className="post-date">{post.date}</div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
