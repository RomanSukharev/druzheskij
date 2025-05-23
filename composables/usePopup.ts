export var usePopup = (handleKeyDownEsc: () => void) => {
  var node_header = () => document.getElementById("header")!;

  var _handleKeyDownEsc = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      handleKeyDownEsc();
    }
  };

  onMounted(() => {
    hiddenCarrotMessenger(true);
    window.addEventListener("keydown", _handleKeyDownEsc);

    requestAnimationFrame(() => {
      document.body.style.cssText = `
      overflow: hidden;
      padding-right: ${getWidthScrollbar()}
      -webkit-overflow-scrolling: touch;
      touch-action: none;
      -ms-touch-action: none;
      `;
      node_header().style.cssText = `width: calc(100% - ${getWidthScrollbar()})`;
    });

    
  });

  onUnmounted(() => {
    hiddenCarrotMessenger(false);
    window.removeEventListener("keydown", _handleKeyDownEsc);

    requestAnimationFrame(() => {
      document.body.style.cssText = "";
      node_header().style.cssText = "";
    });
  });
};
