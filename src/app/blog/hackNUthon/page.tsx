import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import React from "react";

const NHK = () => {
  return (
    <div>
        <ThemeToggleButton />
        <div style={{paddingLeft:'185px'}}>
            <div style={{width:'100%', paddingTop:'-30px'}}>
              <h1 style={{fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol", fontSize:'50px'}}>Hack-NU-thon 6.0</h1>
            </div>
            <hr style={{opacity:'0.09', width:"80%"}} />
        </div>
      
      
    </div>
  );
}
export default NHK; 