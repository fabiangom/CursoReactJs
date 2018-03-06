//variables let - el valor puede cambiar
//constantes const - el valor nunca cambiará
let base = 5
let height = 7

//original function
function triangleArea(base, height) {
	return base * height / 2
}

//arrow function
let triangleArea = (base, height) => base * height / 2

console.log(`El area de un triangulo de base 
	${base} y altura ${height} es: ${triangleArea(base, height)}`)