//uso de la funcion Date()

const nacimiento = new Date(1995, 8, 6)
const hoy = new Date()        //crea un objeto "hoy" de tipo Date()
const tiempo = hoy - nacimiento
const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate()) //hacemos uso del metodo "get" sobre un objeto "hoy"

const tiempoSegundos = tiempo / 1000
const tiempoMin = tiempoSegundos / 60
const tiempoHoras = tiempoMin / 60
const diasSemana = [
	"Domingo",
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
	"Sabado"
]

console.log(`${tiempo}`)
console.log(`${tiempoSegundos}`)
console.log(`${tiempoMin}`)
console.log(`${tiempoHoras}`)
console.log(`${proximoCumple}`)
console.log(`${diasSemana}`)
console.log(`${diasSemana[proximoCumple.getDay()]}`)