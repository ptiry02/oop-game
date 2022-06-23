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
          break
        case 'ArrowRight':
          this.player.moveRight()
          break
      }
    })
  }
}
