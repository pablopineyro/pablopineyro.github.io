// Creación de clase Square que hereda de Shape
class Square extends Shape {
  // Constructor que da nombre y cantidad de lados
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  // Cálculo y registro del área del cuadrado
  calcArea() {
    const area = this.sideLength ** 2;
    console.log(`The area of ${this.name} is ${area}`);
  }
}

// Creación de instancia y llamada de métodos
const square = new Square(5);
square.calcPerimeter();
square.calcArea();