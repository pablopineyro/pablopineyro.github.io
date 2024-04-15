// Define la clase Shape
class Shape {
    // Constructor para inicializar
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    // Método que calcula y registra el perímetro
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`The perimeter of ${this.name} is ${perimeter}`); // Resultado
    }
  }

// Creación de objetos Shape y llamada de función
const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();