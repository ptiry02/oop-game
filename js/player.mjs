export default class Player {
  constructor() {
    this.positionX = 15 * 38
    this.positionY = 0
    this.playerElement = this.createPlayer()
  }
  createPlayer() {
    const domPlayer = document.createElement('div')
    const image = document.createElement('img')
    image.id = 'character'
    image.setAttribute('src', '../assets/images/character-right.png')
    domPlayer.appendChild(image)
    domPlayer.id = 'player'
    domPlayer.style.left = `${this.positionX}px`
    const boardElm = document.getElementById('board')
    boardElm.appendChild(domPlayer)
    return domPlayer
  }
  moveLeft() {
    if (this.positionX === 0) return
    this.positionX = this.positionX - 15
    this.playerElement.style.left = `${this.positionX}px`
  }
  moveRight() {
    if (this.positionX === 1155) return
    this.positionX = this.positionX + 15
    this.playerElement.style.left = `${this.positionX}px`
  }
}
