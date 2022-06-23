export default class Player {
  constructor() {
    this.positionX = 50
    this.positionY = 0
  }
  moveLeft() {
    this.positionX--
  }
  moveRight() {
    this.positionX++
  }
}
