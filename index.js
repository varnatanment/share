const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d') 

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor(x, y, radius, color) {
        this.x
        this.y
        this.radius
        this.color
    }

    draw() {
      c.beginPath() 
      c.arc(this.x, this.y, this.radius, this.color, 0, )
    }
}    

const player = new Player(100, 100, 30, 'blue')