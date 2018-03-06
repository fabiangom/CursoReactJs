//creacion de una clase que funciona como un prototipo
//la cual contiene un constructor que de manera impricita al terminar el bloque de codigo
//retornara el valor this, sin tener que escribir un "return"
class Punto {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	moverEnX(x) {
		this.x += x
	}
	moverEnY(y) {
		this.y += y
	}
	distancia(p) {
		const x = this.x - p.x
		const y = this.y - p.y

		return Math.sqrt(x * x + y * y) //funcion para obtener raiz cuadrada
	}
}

//crear un nuevo objeto con la palabra "new" seguida de una funcion "Punto"
const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))

p1.moverEnX(10)
console.log(p1.distancia(p2))

p2.moverEnY(-4)
console.log(p1.distancia(p2))