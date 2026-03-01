"use client"

import { useEffect, useRef, useState } from "react";

export default function LazyLoad({ children }: { children: React.ReactNode }) {
   const ref = useRef<HTMLDivElement | null>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
         if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
         }
         },
         { threshold: 0.2 }
      );

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
   }, []);

   return (
      <div ref={ref}>
         {isVisible ? children : <div className="h-60" />}
      </div>
   );
}