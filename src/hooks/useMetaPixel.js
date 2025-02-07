import { useEffect } from 'react';
import { initializePixel, trackEvent } from '../utils/metapixels';

export const useMetaPixel = () => {
  useEffect(() => {
    initializePixel();
  }, []);

  return { trackEvent };
};