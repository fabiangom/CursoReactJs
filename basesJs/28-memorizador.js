//fibonacci con contador y almacenado de datos
//mayor optimizacion
//almacena los numero que ya se han contado antes, para no volver a repetir la suma de ellos

let contadorMemo = 1
function fibonacciMemo(num, memoria = {}) {

	contadorMemo++
	if(memoria[num]) return memoria[num]
	if(num == 1) return 0
	if(num == 2) return 1

	return memoria[num] = fibonacciMemo(num - 1,memoria) + fibonacciMemo(num - 2, memoria)
}



//fibonacci recursivo
//hace la suma de todos los numeros cada vez aun cuando ya lo ha contado en anteriores veces

let contadorRec = 1
function fibonacciRecursivo(num) {

	contadorRec++
	if(num == 1) return 0
	if(num == 2) return 1

	return fibonacciRecursivo(num - 1) + fibonacciRecursivo(num - 2)
}