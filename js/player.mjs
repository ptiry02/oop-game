export default class Player {
  constructor() {
    this.positionX = 40
    this.positionY = 0
    this.height = this.calcHeight()
    this.width = 10
    this.playerContainer = this.createPlayer()
    this.image = this.createImage(this.playerContainer)
  }
  calcHeight() {
    const result1 = 713 / 1024
    const result2 = (0.1 * window.innerWidth * result1) / window.innerHeight
    return result2 * 100
  }
  createPlayer() {
    const domPlayer = document.createElement('div')
    domPlayer.id = 'player'
    domPlayer.style.left = `${this.positionX}vw`
    domPlayer.style.bottom = `${this.positionY}vh`
    domPlayer.style.height = `${this.height}vh`
    domPlayer.style.width = `${this.width}vw`

    console.log('height: ', this.height)
    console.log('width: ', this.width)

    const boardElm = document.getElementById('board')
    boardElm.appendChild(domPlayer)
    return domPlayer
  }
  createImage(parent) {
    const image = document.createElement('img')
    image.id = 'character'
    image.setAttribute('src', '../assets/images/character-right.png')
    image.style.width = `${this.width}vw`
    parent.appendChild(image)
    return image
  }
  moveLeft() {
    if (this.positionX <= 0) return
    this.image.src = '../assets/images/character-left.png'
    this.positionX -= 5
    this.playerContainer.style.left = `${this.positionX}vw`
  }
  moveRight() {
    if (this.positionX >= 82) return
    this.image.src = '../assets/images/character-right.png'
    this.positionX += 5
    this.playerContainer.style.left = `${this.positionX}vw`
  }
}
