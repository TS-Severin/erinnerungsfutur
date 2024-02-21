import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const useGSAP = (elementRef) => {
  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      gsap.fromTo(
        element,
        { y: -100, opacity: 0 }, // Initial position (fly from above)
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' } // Final position (center of the screen)
      );
    }
  }, [elementRef]);
};

export default useGSAP;
