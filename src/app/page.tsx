'use client';
import FlipLink from '@/components/ui/text-effect-flipper';
import ThemeToggleButton from '@/components/ui/theme-toggle-button';
import React from 'react';
import Blog from './blog';
import Projects from './project';

const page = () => {
  return (
    <div>
      <ThemeToggleButton />
      <div style={{paddingLeft:'185px'}}>
        <div style={{width:'50%', paddingTop:'-30px'}}>
          <h1 style={{fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol", fontSize:'50px'}}>sarthak </h1>
        </div>
        <hr style={{opacity:'0.09', width:"80%"}} />
        <br />
        <div style={{paddingLeft:'2px', wordWrap:'normal',width:'75%',fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"}}>full stack developer & problem solver <br /> code, chill, repeat </div>
        <br />
        <hr style={{opacity:'0.1', width:"80%",}} />
        
        <Projects/>
        <Blog/>
        {/* <FlipLink href="https://www.linkedin.com/in/rathor-sarthak-b76277357/">
            LINKEDIN
        </FlipLink>
        <FlipLink href="">I</FlipLink> <br />
        <FlipLink href="">N</FlipLink>  */}
      </div>  
    </div>
  );
}


export default page;
