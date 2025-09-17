"use client";

import { useEffect } from 'react';
import { preloadCriticalResources, optimizeImages } from '../lib/performance';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    preloadCriticalResources();

    // Optimize animations for performance
    const optimizeAnimations = () => {
      // Reduce motion for users who prefer it
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--animation-iteration-count', '1');
      }
    };

    // Lazy load non-critical components (removed to prevent hydration issues)
    const lazyLoadComponents = () => {
      // Disabled lazy loading to prevent hydration mismatches
      // The sections will load normally without the 'loaded' class
    };

    // Initialize optimizations
    optimizeAnimations();
    lazyLoadComponents();
    optimizeImages();

    // Performance monitoring (simple approach)
    if (process.env.NODE_ENV === 'development') {
      // Simple performance monitoring without external dependencies
      const startTime = performance.now();
      
      window.addEventListener('load', () => {
        const loadTime = performance.now() - startTime;
        console.log(`Page load time: ${loadTime.toFixed(2)}ms`);
      });
    }

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
