//usando callbacks que no necesariamente se tiene que llamar
//la variable callback

setTimeout(function callback() {
	console.log('ya pasó 3 segundo') //pasado los 3 segundos se ejecuta esta linea
}, 3000) //3 mil milisegundos = 3 segundos

console.log(' hola') //se ejecuta primero



//generamos un cuello de botella en la pila de ejecucion
//por medio de un ciclo for
//el cual tarda demasiado y no permite ejecutar ninguna otra linea de coido
//hasta que ella haya sido cumplida

setTimeout(function callback() {
	console.log('A') //mostrara "A" despues de un segundo
}, 1000) //indica que despues de 1seg debera ejecutar la lina de arriba

for (let i = 0; i < 9999999999; i++); //el ciclo for no permitirá que aun pasando el segundo que debe cumplir la linea de arriba para ser ejecutada
									  //se cumpla, ya que nada será ejecutado hasta haber terminado el ciclo
console.log('B')