export var setCookies = () => {
  // --------------------------- set utm_referrer (start) ---------------------------
  if(document.referrer && document.referrer !== location.origin) document.cookie = `utm_referrer=${document.referrer}`
  // ---------------------------- set utm_referrer (end) ----------------------------
};
