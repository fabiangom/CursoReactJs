class Toggable {
	constructor(el) {
		//inicializar el estado interno
		this.el = el
		this.el.innerHTML = 'Off'
		this.activated = false
		this.onClick = this.onClick.bind(this)
		this.el.addEventListener('click', this.onClick)
	}
	onClick(ev) {
		//cambiar estado interno
		//llamar a toogleText
		this.activated = !this.activated
		this.toogleText()
	}
	toogleText() {
		//cambiar el texto
		this.el.innerHTML = this.activated ? 'On' : 'Off'
	}
}

const button = document.getElementById('boton')
const miBoton = new Toggable(button)