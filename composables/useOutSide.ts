export const useOutSide = (callback: () => void) => {
  const node_ref = ref<HTMLDivElement | null>(null)
  const handle = (event: MouseEvent | TouchEvent) => {
    if (node_ref.value && !node_ref.value!.contains(event.target as Node)) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handle)
    document.addEventListener('touchstart', handle)
  })
  onUnmounted(() => {
    document.removeEventListener('mousedown', handle)
    document.removeEventListener('touchstart', handle)
  })
  return node_ref
}