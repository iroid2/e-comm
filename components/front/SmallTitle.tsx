import React from 'react';  

export default function SmallTitle({ title, className }: { title: string; className: string }) {  
  return (  
    <div className={`inline-block rounded-full bg-white/20  px-4 py-1.5 text-sm backdrop-blur-sm`}>  
      <span className={` ${className}`}>✨{title}</span>  
    </div>  
  );  
}