// 'use client'

// import { useEffect } from 'react'
// import Lenis from '@studio-freight/lenis'

// export default function SmoothScroll({ children }: { children: React.ReactNode }) {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       orientation: 'vertical',
//       gestureOrientation: 'vertical',
//       smoothWheel: true,
//       touchMultiplier: 2,
//     })

//     function raf(time: number) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)

//     return () => {
//       lenis.destroy()
//     }
//   }, [])

//   return <>{children}</>
// }

"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: true,
      syncTouchLerp: 0.1,
      lerp: 0.08,
    });

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
