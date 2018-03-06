function saludarFamilia(apellido) {
	return function saludarMiembroDeFamilia(nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")

saludarGomez("fabian")
saludarGomez("etna")
saludarGomez("mateo")
saludarGomez("rocio")

saludarPerez("ana")
saludarPerez("roberto")
saludarPerez("pedro")
saludarPerez("julieta")


//fucion que concatena el prefijo "Re" a cualquier palabra que ingreses
function makePrefixer(prefijo) {
	return function palabra(palabra) {
		console.log(`${prefijo}${palabra}`)
	}
}

const prefix = makePrefixer("Re")

prefix("bueno")
prefix("malo")
prefix("chido")