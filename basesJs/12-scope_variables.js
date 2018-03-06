//esta variable nombre esta ubicada en el scope global
//y puede ser utilizada en cualquier parte del codigo
var nombre = "Fabian"

function saludar1() {
	console.log(`Hola ${nombre}`) //imprime "hola fabian"
}

//si le damos un parametro a la funcion, entonces va a imprimir el valor
//que este recibiendo del parametro
//e ignorará el valor de la variable global
//por lo tanto esta haciendo uso de una variable en scope local
function saludar2(nombre) {
	console.log(`Hola ${nombre}`) //imprime "hola jared"
}

//tambien puede ser definida una variable en scope local de esta manera
function saludar3() {
	var nombre = "Gomez"
	console.log(`Hola ${nombre}`) //imprime "hola gomez"
}

//funcion que va a tomar como valor para "nombre" el que se haya dado como parametro
function saludar10(nombre) {
	for (var i = 0; i < 10; i++) {
		console.log(`Hola ${nombre}`)
	}
	console.log(`El valor de i es: ${i}`)
}

saludar1()
saludar2("Jared")
saludar3()
saludar10("Brisho")