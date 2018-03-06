//funcion suma que hace lo mismo que un for pero con menos codigo
//utilizando la funcion reduce, pasandole dos parametros, los cuales son
//el acumulador y cada uno de los valores que va a recorrer dentro del array "number"
function suma(...numbers) {
	return numbers.reduce(function(acum, number) {
		acum += number
		return acum
	}, 0)
}

//funcion que retorna el doble de los valores del array
//usamos la funcion "map" la cual recibe una funcion que se ejecutará
//por cada uno de los elementos
//hacemos unos de arrow function
function dobles(...numbers) {
	return numbers.map(number => number * 2)
}

//funcion que retorna un array con los numeros que sean pares
//dados dentro de un array
//usando la funcion filter y usando arrow functions
function pares(...numbers) {
	return numbers.filter(number => number % 2 == 0)
}

suma(2, 4, 6, 8, 10)
dobles(2, 4, 6, 8, 10
pares(1, 2, 3, 4, 5, 6, 7)