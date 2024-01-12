class Circle {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color
    }
    render() {
        let ctx = document.getElementById('myCanvas').getContext('2d')
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }
}

let circle = new Circle(50, 50, 80, '#000000')
circle.render()