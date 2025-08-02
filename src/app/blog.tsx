import React from "react";
import { Circle } from "lucide-react";
import Link from "next/link";   

const Blog = () => {
  return (
    <div>
      <h3 style={{fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol", fontSize:'35px', paddingTop:'50px', paddingBottom:'10px'}}>
        writing 
      </h3>
      <span className="rounded-full">
        <Circle className="inline mr-2" size={5} />
        <Link href="/blog/hackNUthon" style={{textDecoration:'underline', textDecorationColor: 'rgba(128, 128, 128, 0.8)' }} >
          Hack-NU-thon 6.0
        </Link>
        <br />
        <Circle className="inline mr-2" size={5} />
        <Link href="/blog/hackNUthon" style={{textDecoration:'underline', textDecorationColor: 'rgba(128, 128, 128, 0.8)' }}>
          Innovation Village
        </Link>
        <br />
        <Circle className="inline mr-2" size={5} />
        <Link href="/blog/hackNUthon" style={{textDecoration:'underline', textDecorationColor: 'rgba(128, 128, 128, 0.8)' }}>
          hero
        </Link>
      </span>
    </div>
  );
}

export default Blog;