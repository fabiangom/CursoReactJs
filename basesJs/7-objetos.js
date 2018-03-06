//creacion de un objeto "p1" con dos atributos
const p1 = {
	x: 0,
	y: 4
}

const p2 = {
	x: 3,
	y: 0
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