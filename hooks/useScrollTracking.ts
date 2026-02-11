import { useEffect, useRef } from 'react';
import { pushEvent } from '../services/analytics';
import { AnalyticsEvent, TrackingKey } from '../types';

export const useScrollTracking = () => {
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      [25, 50, 75, 90].forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          pushEvent(AnalyticsEvent.SCROLL_DEPTH, { [TrackingKey.DEPTH]: `${depth}%` });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
