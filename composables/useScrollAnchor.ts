export var useScrollAnchor = async () => {
  //Костыль
  await new Promise((res) => {
    setTimeout(() => {
      res(null);
    }, 500);
  });

  /* 
  run_scrolling_process содежит в себе координату элемента Y, к которому движется скролл
  либо false, если процесс скроллинга не выполняется
  */
  var run_scrolling_process = useState<number | boolean>("run_scrolling_process", () => false);

  /*
  Нужно только при 2х header (как на сайте Централь у мобилок). 
  Если на сайте 1 header, то удаляй все is_header_double
  */
  var is_header_double = useState("is_header_double", () => false);

  var requestAnimationFrame =
    window.requestAnimationFrame || //@ts-ignore
    window.mozRequestAnimationFrame || //@ts-ignore
    window.webkitRequestAnimationFrame || //@ts-ignore
    window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;

  if (!document.body.getBoundingClientRect || !requestAnimationFrame) {
    return;
  }

  var getPageHeight = (): number => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  var page_height = getPageHeight();
  var has_second_process_scrolling = false;

  var handle = () => {
    has_second_process_scrolling = true;

    setTimeout(() => {
      has_second_process_scrolling = false;
    }, 25);
  };

  var initHandlers = () => {
    window.addEventListener("mousewheel", handle);
    window.addEventListener("wheel", handle);
    window.addEventListener("pointerdown", handle);
    window.addEventListener("keydown", handle);
    is_header_double.value = false;
  };

  var remmoveHandlers = () => {
    window.removeEventListener("mousewheel", handle);
    window.removeEventListener("wheel", handle);
    window.removeEventListener("pointerdown", handle);
    window.removeEventListener("keydown", handle);
    run_scrolling_process.value = false;
  };

  var links = document.querySelectorAll<HTMLElement>("a[href^='#']");
  for (let link of links) {
    let elemId = link.getAttribute("href")!.slice(1);
    let elem = document.getElementById(elemId);

    if (!elem) {
      continue;
    }

    link.onclick = (e) => {
      e.preventDefault();
      page_height = getPageHeight();
      var startY = elem!.getBoundingClientRect().top;
      var direction = startY < 0 ? -1 : startY > 0 ? 1 : 0;

      scroll(elem!, direction);
    };
  }

  function scroll(el: HTMLElement, direction: number) {
    var duration = 2000;
    var start = new Date().getTime();

    run_scrolling_process.value = el.getBoundingClientRect().top + window.pageYOffset;
    initHandlers();

    var fn = function () {
      var top = el.getBoundingClientRect().top;
      var now = new Date().getTime() - start;
      var result = Math.round((top * now) / duration);

      result = result > direction * top ? top : result == 0 ? direction : result;

      if (
        direction * top > 0 &&
        page_height - window.pageYOffset > direction * document.documentElement.clientHeight &&
        !has_second_process_scrolling
      ) {
        window.scrollBy(0, result);
        requestAnimationFrame(fn);
      } else {
        has_second_process_scrolling = false;
        remmoveHandlers();
      }
    };

    requestAnimationFrame(fn);
  }
};
