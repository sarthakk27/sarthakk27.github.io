import React from "react";
import { Circle } from "lucide-react";
import Link from "next/link";   

const Projects = () => {
  return (
    <div>
      <h3 style={{fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol", fontSize:'35px', paddingTop:'50px', paddingBottom:'10px'}}>
        projects 
      </h3>
      <span className="rounded-full">
        <Circle className="inline mr-2" size={5} />
        <Link href="/project/promocraft" style={{textDecoration:'underline', textDecorationColor: 'rgba(128, 128, 128, 0.8)' }} >
          Promocarft - a simple way to design
        </Link>
        <br />
        <Circle className="inline mr-2" size={5} />
        <Link href="/blog/hackNUthon" style={{textDecoration:'underline', textDecorationColor: 'rgba(128, 128, 128, 0.8)' }}>
          FocusMate
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

export default Projects;