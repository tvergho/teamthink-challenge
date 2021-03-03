import React from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: 1200,
    height: 800,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    setIsMobile(window.innerWidth <= 768);
  }

  React.useEffect(() => {
    window.addEventListener('resize', changeWindowSize, { passive: true });
    changeWindowSize();

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return { ...windowSize, isMobile };
}
