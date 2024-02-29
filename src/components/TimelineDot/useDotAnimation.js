import { useEffect } from 'react';
import gsap from 'gsap';

export default function useFlyInAnimation(elementRef, index) {
  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      gsap.fromTo(
        element,
        { x: window.innerWidth, y: -100, opacity: 0, zIndex: 1000 }, // Initial position at the top right corner of the viewport with high z-index
        { x: 0, y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: index * 0.1 } // Final position with delay based on index for each dot
      );
    }
  }, [elementRef, index]);
}







