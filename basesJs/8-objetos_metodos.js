//creacion de un objeto "p1" con dos atributos
const p1 = {
	x: 0,
	y: 4,
	//estos metodos sirven para cambiar los valores iniciales en un objeto
	//la "x" y "y" no son las mismas que las de arriba
	//estas tendran un nuevo valor el cual es asignado a "moverEnX" y "moverEnY"
	//lo cual hará que los valores iniciales del objeto puedan ser modificados
	moverEnX: function (x) { this.x = this.x + x }, //funciones, llamadas metodos ya que son atributos de un objetos
	moverEnY: function (y) { this.y = this.y + y }
}

const p2 = {
	x: 3,
	y: 0,
	moverEnX: function (x) { this.x = this.x + x },
	moverEnY: function (y) { this.y = this.y + y }
}

function distancia(p1, p2) {
	const x = p1.x - p2.x
	const y = p1.y - p2.y

	return Math.sqrt(x * x + y * y) //funcion para obtener raiz cuadrada
}

//toma por defecto los valores que han sido dados en el objeto p2
//en la parte superior
console.log(distancia(p1, p2))

//toma como valores para el p2 los que se le han asignado ahora
//que son los valores entre corchetes
console.log(distancia(p1, { x: 10, y: -4 }))