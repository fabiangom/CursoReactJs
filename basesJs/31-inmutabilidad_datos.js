let fabian = { nombre: 'fabian', apellido: 'gomez', edad: 22}
let otrofabian = fabian. //esta variable apunta al mismo obejto fabian

otrofabian.edad = 23 //por lo tanto esta instruccion va a modidicar la variable edad del objeto

cumpleaños = function (persona) { //esta funcion no modifica el valor del objeto anterior, sino crea uno aparte y ese modifica
	const clone = Object.assign({}, persona)
	clone.edad++
	return clone
}

cumpleaños(fabian)