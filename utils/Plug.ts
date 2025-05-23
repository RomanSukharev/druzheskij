export default class Plug {
  private readonly DIST: number = 50
  private X_START: number = 0
  private X_MOVE: number = 0
  public IS_HIDDEN_PLUG: boolean = false

  public touchStart(event: TouchEvent): void {
    this.X_START = event.touches[0].clientX
  }

  public touchMove(event: TouchEvent): void {
    this.X_MOVE = event.touches[0].clientX
  }

  public mouseDown(event: MouseEvent): void {
    this.X_START = event.clientX
  }

  public mouseMove(event: MouseEvent): void {
    this.X_MOVE = event.clientX
  }

  public clear(): void {
    this.X_START = 0
    this.X_MOVE = 0
    this.IS_HIDDEN_PLUG = false
  }

  public handleEnd(): void {
    if (Math.abs(this.X_MOVE - this.X_START) > this.DIST) {
      this.IS_HIDDEN_PLUG = true
    }
  }
}