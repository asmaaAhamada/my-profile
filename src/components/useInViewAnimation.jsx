import { useState, useEffect, useRef } from "react";

export function useInViewAnimation(options = { threshold: 0.1 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // مرة واحدة فقط
        }
      },
      options
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}
