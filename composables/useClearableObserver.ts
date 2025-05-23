export var useClearableObserver = (
  node: Ref<HTMLElement>,
  time_pending: number = 300,
  observer_options?: IntersectionObserverInit
) => {
  var observer_was_triggered = ref(false);
  var timer_download: NodeJS.Timeout | null = null;

  onMounted(() => {
    var _observer_options = observer_options || {
      threshold: 0,
      rootMargin: "500px 0px 500px 0px",
    };

    var observer = new IntersectionObserver((entries) => {
      entries.forEach((entr) => {
        if (entr.isIntersecting) {
          timer_download = setTimeout(() => {
            observer_was_triggered.value = true;
            observer.unobserve(node.value);
          }, time_pending);
        } else {
          clearTimeout(timer_download as NodeJS.Timeout);
          timer_download = null;
        }
      });
    }, _observer_options);

    observer.observe(node.value);
  });

  return observer_was_triggered;
};
