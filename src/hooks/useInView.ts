import { useEffect, useRef, useState } from 'react';

export const useInView = (threshold = 0.1, rootMargin = '0px', triggerOnce = false) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Adjust threshold and rootMargin for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const mobileThreshold = isMobile ? 0.01 : threshold;
  const mobileRootMargin = isMobile ? '-40px 0px -10% 0px' : rootMargin;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // If triggerOnce is true, disconnect after first trigger
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold: mobileThreshold, rootMargin: mobileRootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [mobileThreshold, mobileRootMargin, triggerOnce]);

  return [ref, inView] as const;
};