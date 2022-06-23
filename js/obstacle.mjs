export default class Obstacle {
  constructor() {
    this.positionX = this.setRandom()
    this.positionY = 90
    this.height = 20
    this.width = 5

    this.domElement = this.createDomElement()
  }
  setRandom() {
    const number = Number(Math.random().toFixed(2)) * 80
    return number
  }
  createDomElement() {
    // create dom element
    const newElm = document.createElement('div')

    // set id and css
    newElm.className = 'obstacle'
    newElm.style.left = `${this.positionX}vw`
    newElm.style.bottom = `${this.positionY}vh`
    newElm.style.width = `${this.width}vw`
    newElm.style.height = `${this.height}vh`

    // append to the dom
    const boardElm = document.getElementById('board')
    boardElm.appendChild(newElm)

    return newElm
  }
  moveDown() {
    this.positionY--
    this.domElement.style.bottom = `${this.positionY}vh`
  }
}
