import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function useFlyInAnimation(elementRef, index) {
  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      gsap.fromTo(
        element,
        { y: Math.random() * -1000, opacity: 0 }, // Initial position with randomness
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: index * 0.1 } // Final position with delay based on index for each dot
      );
    }
  }, [elementRef, index]);
};
