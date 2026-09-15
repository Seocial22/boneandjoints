"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ElfsightWidget = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!inView) return;

    const loadScript = () => {
      if (document.querySelector('script[src*="elfsight.com"]')) return;
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(loadScript);
    } else {
      setTimeout(loadScript, 200);
    }
  }, [inView]);

  const getPadding = () => {
    if (windowWidth < 480) return '0 5px';
    if (windowWidth < 768) return '0 10px';
    return '0';
  };

  return (
    <div 
      ref={ref}
      style={{
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        padding: getPadding(),
        minHeight: '400px'
      }}
    >
      {inView && (
        <div 
          className="elfsight-app-3ee9a1f8-af8b-4b62-90b7-8e96b282ab58" 
          data-elfsight-app-lazy
        />
      )}
    </div>
  );
};

export default ElfsightWidget;