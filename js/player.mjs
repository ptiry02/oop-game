export default class Player {
  constructor() {
    this.positionX = 15 * 38
    this.positionY = 0
    this.playerContainer = this.createPlayer()
    this.image = this.createImage(this.playerContainer)
  }
  createPlayer() {
    const domPlayer = document.createElement('div')
    domPlayer.id = 'player'
    domPlayer.style.left = `${this.positionX}px`
    const boardElm = document.getElementById('board')
    boardElm.appendChild(domPlayer)
    return domPlayer
  }
  createImage(parent) {
    const image = document.createElement('img')
    image.id = 'character'
    image.setAttribute('src', '../assets/images/character-right.png')
    parent.appendChild(image)
    return image
  }
  moveLeft() {
    if (this.positionX <= 0) return
    this.image.src = '../assets/images/character-left.png'
    this.positionX = this.positionX - 15
    this.playerContainer.style.left = `${this.positionX}px`
  }
  moveRight() {
    if (this.positionX >= 1125) return
    this.image.src = '../assets/images/character-right.png'
    this.positionX = this.positionX + 15
    this.playerContainer.style.left = `${this.positionX}px`
    console.log(this.positionX)
  }
}
