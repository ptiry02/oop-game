import Player from './player.mjs'
import Obstacle from './obstacle.mjs'

export default class Game {
  constructor() {
    this.player = null
    this.time = 0
    this.obstacleArr = []
  }
  start() {
    this.player = new Player()
    this.addEventListeners()

    setInterval(() => {
      this.obstacleArr.forEach((ob) => {
        ob.moveDown()
      })
      if (this.time % 60 === 0) {
        this.obstacleArr.push(new Obstacle())
      }
      this.time++
    }, 50)
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
