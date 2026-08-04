


// export default function TopLine() {
//   return (
//     <div className="fixed top-0 left-0 w-full h-[2px] bg-slate-800 z-[9999] overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="animate-light h-full w-40 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]" />
//       </div>
//     </div>
//   );
// }

// export default function TopLine() {
//   return (
//     <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] overflow-hidden">
//       <div className="w-full h-full bg-slate-900">
//         <div className="animate-neon-line w-[300%] h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"></div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

const TopLine = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Current scroll position calculate karein
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setScrollWidth(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Fixed Track Container at Top
    <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-[9999]">
      {/* Dynamic Moving Neon Line */}
      <div
        className="h-full bg-gradient-to-r from-[#0052d4] via-[#4364f7] to-[#ffffff] transition-all duration-75 ease-out neon-glow-line"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};

export default TopLine;