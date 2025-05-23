//@ts-nocheck
export const isMobile = () =>
  navigator.userAgentData?.mobile ||
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
    navigator.userAgent
  );