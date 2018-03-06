//Usando la funcion Call para hecer referencia al this
//de donde tiene que obtener sus valores

const fabian = {
	nombre: 'Fabian',
	apellido: 'Gomez'
}

function saludar(veces) {
	for (let i = 0; i < veces; i++) {
		console.log(`Hola ${this.nombre} ${this.apellido}`)
	}
}

saludar.call(fabian, 3)
//fabian no cuenta como parametro, fabian es quien hace referiencia a donde se esta
//haciendo la llamada del call que es la ubicacion del objeto



//Usando la funcion Apply para hacer referencia al this
//de donde tomar sus valores
//es similar a call solo que los parametros tiene que ser pasador como un array
//usando los corchetes [] y podemos colocar la cantidad que necesitemos siempre separados por coma
//[3, true, 'mundo']

const fabian = {
	nombre: 'Fabian',
	apellido: 'Gomez'
}

function saludar(veces) {
	for (let i = 0; i < veces; i++) {
		console.log(`Hola ${this.nombre} ${this.apellido}`)
	}
}

saludar.apply(fabian, [3])