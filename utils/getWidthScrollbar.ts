export var getWidthScrollbar = (): string => {
  if (document.body.scrollHeight <= window.innerHeight) {
    return '0';
  }

  var item = document.createElement("div");
  item.style.cssText = `
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
    visibility: hidden;
  `;


  document.body.appendChild(item);
  var scrollbarWidth = item.offsetWidth - item.clientWidth;
  document.body.removeChild(item);
  return scrollbarWidth + "px";
};
