import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import React from "react";

const Promocraft = () => {
  return (
    <div>
        <ThemeToggleButton />
        <div style={{paddingLeft:'185px'}}>
            <div style={{width:'100%', paddingTop:'-30px'}}>
              <h1 style={{fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol", fontSize:'50px'}}>Promocraft - a simple way to design</h1>
            </div>
            <hr style={{opacity:'0.09', width:"80%"}} />
            <br />
            <div style={{paddingLeft:'2px', wordWrap:'normal',width:'75%',fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"}}>
            A free, low-code template builder designed for non-technical users to create templates quickly and easily.
            </div>
        </div>
      
      
    </div>
  );
}
export default Promocraft; 