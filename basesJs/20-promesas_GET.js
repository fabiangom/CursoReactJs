//Consumiendo API y usando las promesas
//usando GET
//ejecutado desde codepen
//porque necesito estar conectado a un servidor para poder consumir la API

function get(URL) {
	return new Promise((resolve, reject)  => {
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {
			const DONE = 4
			const OK = 200
			if(this.readyState === DONE) {
				if(this.status === OK) {
					//todo ok
					resolve(JSON.parse(this.responseText))
				} else {
					//hubo un error
					reject(new Error(`Error ${this.status}`))
				}
			}
		}

		xhr.open('GET', URL);
		xhr.send(null);
	})
}

function handleError(err) {
	console.log(`Request failed: ${err}`)
}

let luke
get('https://swapi.co/api/people/1/')
	.then((response) => {
		luke = response
		return get(luke.homeworld)
	})
	.then((homeworld) => {
		luke.homeworld = homeworld
		console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
	})
	.catch(err => handleError(err))