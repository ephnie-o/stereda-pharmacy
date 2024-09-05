'use client';
import { useEffect, useRef } from 'react';

export default function AnimateOnScroll({ children, animationClass }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.disconnect();
    };
  }, [animationClass]);

  return (
    <div ref={elementRef} className="opacity-0" data-animation={animationClass}>
      {children}
    </div>
  );
}