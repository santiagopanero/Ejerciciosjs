function contarEspacios (texto) {
	let espaciosEnBlanco = 0

	for (i = 0; i < texto.length; i++) {
		if (texto[i] === ' ') {
		espaciosEnBlanco = espaciosEnBlanco + 1
		} 
	}
	return espaciosEnBlanco
}

console.log(contarEspacios('asd asd asd asd asd asd'))