export const initializePixel = () => {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  
  fbq('init', import.meta.env.VITE_META_PIXEL_ID);
  fbq('track', 'PageView');
};

export const trackEvent = async (eventName, eventData = {}) => {
  // Client-side tracking
  if (window.fbq) {
    fbq('track', eventName, eventData);
  }

  // Get cookies for server-side tracking
  const fbp = getCookie('_fbp');
  const fbc = getCookie('_fbc');

  // Server-side tracking via CAPI
  //https://graph.facebook.com/{API_VERSION}/{PIXEL_ID}/events?access_token={TOKEN}
  try {
    const response = await fetch('https://graph.facebook.com/v17.0/' + 
      import.meta.env.VITE_META_PIXEL_ID + '/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [{
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: window.location.href,
          user_data: {
            client_user_agent: navigator.userAgent,
            fbp,
            fbc,
          },
          custom_data: eventData,
        }],
        access_token: import.meta.env.VITE_META_API_ACCESS_TOKEN,
      }),
    });

    if (!response.ok) {
      throw new Error('CAPI request failed');
    }
  } catch (error) {
    console.error('CAPI Error:', error);
  }
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};
