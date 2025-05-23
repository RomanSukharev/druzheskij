export default () => {
  var link_active = ref(0)
  /* Контейнер списка ссылок */
  var node_nav = ref<HTMLElement>()
  /* Коллекция заголовков */
  var header_group_h = ref<HTMLCollectionOf<Element>>()
  /* Коллекция ссылок */
  var nodes_listNavA = ref<HTMLCollectionOf<HTMLLinkElement>>()

  var setActiveTab = debounce(() => {
    var idx: number = 0
    var idx_old: number = link_active.value

    for (var header_group_plans of header_group_h.value!) {
      if (header_group_plans.getBoundingClientRect().y < 500) {
        link_active.value = Math.min(idx, header_group_h.value!.length - 1)
      }
      idx++
    }

    if (idx_old !== link_active.value) {
      setScrollLeft()
    }
  }, 100)

  var setScrollLeft = () => {
    var sum_width: number = 0

    for (var i: number = 0; i < link_active.value; i++) {
      sum_width += nodes_listNavA.value![i].offsetWidth + 8
    }

    requestAnimationFrame(() => {
      node_nav.value!.scrollLeft = sum_width
    })
  }

  onMounted(() => {
    setActiveTab()
    setScrollLeft()
    document.addEventListener('scroll', setActiveTab)
  })

  onUnmounted(() => {
    document.removeEventListener('scroll', setActiveTab)
  })

  return {
    link_active,
    node_nav,
    header_group_h,
    nodes_listNavA,
  }
}
