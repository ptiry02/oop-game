import Player from './player.mjs'

export default class Game {
  constructor() {
    this.player = null
  }
  start() {
    this.player = new Player()
    this.addEventListeners()
  }
  addEventListeners() {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          this.player.moveLeft()
          console.log(this.player.positionX)
          break
        case 'ArrowRight':
          this.player.moveRight()
          console.log(this.player.positionX)
          break
      }
    })
  }
}
