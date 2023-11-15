import { useEffect, useState } from 'react';

export const Breakpoints = {
  XS: 576,
  SM: 768,
  MD: 992,
  LG: 1200,
  XL: 1440,
};

export default function useWindowInnerWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return width;
}
