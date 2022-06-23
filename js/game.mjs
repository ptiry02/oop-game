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
      if (this.time % 60 === 0) {
        this.obstacleArr.push(new Obstacle())
      }
      this.obstacleArr.forEach((ob) => {
        ob.moveDown()
        if (
          this.player.positionX < ob.positionX + ob.width &&
          this.player.positionX + this.player.width > ob.positionX &&
          this.player.positionY < ob.positionY + ob.height &&
          this.player.height + this.player.positionY > ob.positionY
        ) {
          //collision detected !!
          console.log('collision detected !!')
        }
      })
      this.time++
    }, 50)
    const button = document.getElementById('pause')
    button.addEventListener('click', () => {
      clearInterval(interval)
    })
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
