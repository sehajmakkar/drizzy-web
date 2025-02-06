export const initializePixel = () => {
  if (!window.fbq) return;
  window.fbq('init', '1209487457495527');
  window.fbq('track', 'PageView');
};

export const trackCustomEvent = (eventName, eventData = {}) => {
  if (!window.fbq) return;
  window.fbq('track', eventName, eventData);
};

// Example events
export const pixelEvents = {
  PURCHASE: 'Purchase',
  ADD_TO_CART: 'AddToCart',
  VIEW_CONTENT: 'ViewContent',
  COMPLETE_REGISTRATION: 'CompleteRegistration'
};
