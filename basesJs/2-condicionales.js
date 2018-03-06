const starWars7 = 'Star Wars : El Despertar de la Fuerza'
const pgStarWars7 = 13

const nameFabian = 'Fabian'
const ageFabian = 22

const nameJared = 'Jared'
const ageJared = 12

//los valores entre parentesis son los parametros que la funcion va a recibir
function canWatchStarWars7(name, age, isWithAdult) {
	if (age >= pgStarWars7) {
		alert(`${name} puede pasar a ver ${starWars7}`)
	} else if (isWithAdult) {
		alert(`${name} puede pasar a ver ${starWars7}
			porque viene acompañado de un adulto`)
	} else {
		alert(`${name} no puede pasar a ver ${starWars7}, 
			porque tiene ${age} años y necesita tener ${pgStarWars7}`)
	}
}

//asignamos los valores a los parametros por medio de las constantes declaradas al inicio
canWatchStarWars7(nameFabian, ageFabian)
//True quiere decir que en este caso la persona viene acompañado por un adulto
canWatchStarWars7(nameJared, ageJared, true)