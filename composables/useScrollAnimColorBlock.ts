interface IuseScrollAnimColorBlock {
  initial: {
    border: number
    left_right: number
  }
  callbacks: {
    border_cb: (last_pos: number, cur_pos: number, node: HTMLDivElement) => number
    left_right_cb: (last_pos: number, cur_pos: number, node: HTMLDivElement) => number
  }
  threshold?: number[]
}

export const useScrollAnimColorBlock = (params: IuseScrollAnimColorBlock) => {
  var bg_node = ref<HTMLDivElement>()
  let lastScrollPosition = 0
  var border_radius = ref<number>(params.initial.border)
  var leftAndRight = ref(params.initial.left_right)

  var handleScroll = () => {
    if (!bg_node.value) return
    const { top } = bg_node.value.getBoundingClientRect()
    border_radius.value = params.callbacks.border_cb(lastScrollPosition, top, bg_node.value)
    leftAndRight.value = params.callbacks.left_right_cb(lastScrollPosition, top, bg_node.value)
  }

  var setObservers = () => {
    var observer_settings = {
      threshold: params.threshold ?? [0],
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!bg_node.value) return
          lastScrollPosition = bg_node.value.getBoundingClientRect().top
          window.addEventListener('scroll', handleScroll)
        }
        // else {
        //   window.removeEventListener('scroll', handleScroll)
        // }
      })
    }, observer_settings)

    if (!bg_node.value) return
    observer.observe(bg_node.value)
  }

  onMounted(() => {
    if (window.innerWidth < 1800) return
    setObservers()
  })

  return { bg_node, border_radius, leftAndRight }
}
