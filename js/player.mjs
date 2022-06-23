export default class Player {
  constructor() {
    this.positionX = 40
    this.positionY = 0
    this.playerContainer = this.createPlayer()
    this.image = this.createImage(this.playerContainer)
  }
  createPlayer() {
    const domPlayer = document.createElement('div')
    domPlayer.id = 'player'
    domPlayer.style.left = `${this.positionX}vw`
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
    this.positionX--
    this.playerContainer.style.left = `${this.positionX}vw`
  }
  moveRight() {
    if (this.positionX >= 82) return
    this.image.src = '../assets/images/character-right.png'
    this.positionX++
    this.playerContainer.style.left = `${this.positionX}vw`
  }
}
