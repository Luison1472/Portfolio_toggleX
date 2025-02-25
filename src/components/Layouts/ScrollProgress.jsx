import React, { useState, useEffect } from 'react';

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '7px', width: `${scrollProgress}%`, backgroundColor: 'lightblue', position: 'fixed', top: '60px', left: 0, zIndex: 1000 }}></div>
  );
}

export default ScrollProgress;