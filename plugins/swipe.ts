import type { DirectiveBinding } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('swipe', {
    mounted: (el: HTMLDivElement, binding: DirectiveBinding<ISwipeArg>) => new Swipe(el, binding),
  })
})

export interface ISwipeArg {
  left: () => void
  right: () => void
  notSwipe?: boolean
}

type BindingType = DirectiveBinding<ISwipeArg>
type DifferenceType = { horizontally: number; vertically: number }

class Swipe {
  private x: number = -1
  private y: number = -1
  private el: HTMLDivElement
  private binding: BindingType
  private dist: number = 80

  constructor(el: HTMLDivElement, binding: BindingType) {
    this.el = el
    this.binding = binding

    this.init()
  }

  actionSwipe = (value: keyof Pick<ISwipeArg, 'left' | 'right'>): void => {
    this.binding.value[value]()
    this.x = -1
  }

  get notEqual(): boolean {
    return this.x !== -1
  }

  swipeDirection = (pageX: number): void => {
    if (this.notEqual && pageX - this.x > this.dist) this.actionSwipe('right')
    if (this.notEqual && pageX - this.x < -this.dist) this.actionSwipe('left')
  }

  touchStart = (event: TouchEvent): void => {
    if (event.changedTouches.length > 1 || event.touches.length > 1) return
    this.x = event.changedTouches[0].pageX
    this.y = event.changedTouches[0].pageY
  }

  getDifference = (pageX: number, pageY: number): DifferenceType => {
    return {
      horizontally: Math.abs(this.x - pageX),
      vertically: Math.abs(this.y - pageY),
    }
  }

  touchMove = (event: TouchEvent): void => {
    if (event.changedTouches.length > 1 || event.touches.length > 1) return
    var { pageX, pageY } = event.changedTouches[0]
    var { horizontally, vertically } = this.getDifference(pageX, pageY)

    if (horizontally >= vertically) event.preventDefault()

    this.swipeDirection(pageX)
  }
  init = (): void => {
    if (this.binding.value.notSwipe) return
    this.el.addEventListener('touchstart', this.touchStart)
    this.el.addEventListener('touchmove', this.touchMove)
  }
}
