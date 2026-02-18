import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';
import { blogPosts } from './blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="blog-post-container">
        <button className="back-button" onClick={() => window.history.back()}>
          ← Back
        </button>
        <h1>Post not found</h1>
        <Link to="/blog">← Back to all posts</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <button className="back-button" onClick={() => window.history.back()}>
        ← Back
      </button>

      <article className="blog-post">
        <header className="post-header">
          <h1>{post.title}</h1>
          <time className="post-date">{post.date}</time>
        </header>

        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <footer className="post-footer">
          <Link to="/blog" className="back-to-blog">← Back to all posts</Link>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
