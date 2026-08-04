import React from 'react';
import TopLine from './COMPONENTS/TopLine';
// import App from './App.jsx'

function Tester() {
  return (
    <div className="bg-[#030712] text-white min-h-screen">
      {/* Top Progress Bar Component */}
      <TopLine />

      {/* Main Content (Demo Page) */}
      <main className="p-8 max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">
          Scroll down to see the Neon Line move!
        </h1>
        
        {/* <App /> */}
      </main>
    </div>
  );
}

export default Tester;