import { useEffect } from 'react';
import gsap from 'gsap';

export default function useEaseInAnimation(elementRef, index) {
  useEffect(() => {
    const element = elementRef.current;

    if (element) {

      // First, set all elements to be invisible initially
      gsap.set(element, { opacity: 1, zIndex: 1000, ease: 'power3.out', delay: 0.5 + Math.random() * 2, });

      // Then, animate the elements to fade in with a delay

      gsap.fromTo(element,
        { scale: 2 },
        { scale: 1, ease: 'power3.out', delay: 0.5 + Math.random() * 2, });



    }
  }, [elementRef, index]);
}







