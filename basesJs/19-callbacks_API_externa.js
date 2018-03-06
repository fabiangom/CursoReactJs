//creando callbacks
//ejecutado desde codepen
//porque necesito estar conectado a un servidor para poder consumir la API
function get(URL, callback) {
	const xhr = new XMLHttpRequest()

	xhr.onreadystatechange = function() {
		const DONE = 4
		const OK = 200
		if(this.readyState === DONE) {
			if(this.status === OK) {
				//todo ok
				callback(null, JSON.parse(this.responseText))
			} else {
				//hubo un error
				callback(new Error(`Error ${this.status}`))
			}
		}
	}

	xhr.open('GET', URL);
	xhr.send(null);
}

function handleError(err) {
	console.log(`Request failed: ${err}`)
}

get('https://swapi.co/api/people/1/', function onResponse(err, luke) {
	if(err) return handleError(err)

	get(luke.homeworld, function onHomeworldResponse(err, homeworld) {
		if(err) return handleError(err)

		luke.homeworld = homeworld
		console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
	})
})