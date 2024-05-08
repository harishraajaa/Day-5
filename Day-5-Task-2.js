class Circle{
    radius=1.0
    colour="red"

    constructor(radius,colour){
        if(typeof(radius)!=="undefined") 
            { this.radius = radius }
        if(typeof(colour)!=="undefined") 
            { this.colour = colour }
    }

    getRadius(){
        return this.radius
    }
    setRadius(radius){
        this.radius = radius
    }
    getColor(){
        return this.colour
    }
    setColor(colour){
        this.colour = colour
    }
    toString(){
        return `Radius: ${this.radius} Colour: ${this.colour}`
    }
    getArea(){
        return ((Math.PI)*this.radius*this.radius)
    }
    getCircumference(){
        return (2*(Math.PI)*this.radius)
    }

}



let c1 = new Circle()
console.log("Constructor with no params: "+ c1.toString())

let c2 = new Circle(3.5)
console.log("Constructor with one param: "+ c2.toString())

let c3 = new Circle(2.2, 'Yellow')
console.log("getRadius: "+c3.getRadius())
c3.setRadius(3.3)
console.log("Radius value after setRadius: " +c3.getRadius())
console.log("getColor: "+c3.getColor())
c3.setColor("Blue")
console.log("Color Value after setColor: " + c3.getColor())
console.log(c3.toString())
console.log("Area: "+c3.getArea())
console.log("Circumference: "+c3.getCircumference())
