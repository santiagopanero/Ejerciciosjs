function calcularResultadoDelExamen (nota) {
	if  (nota < 4) {
		return 'aplazado'	
	}else if (nota > 6 && nota < 10) {
		return 'aprobado'
	}else if (nota >= 4 && nota <= 6) {
		return 'maomeno'
	}else if (nota > 10) {
		return 'no califica'
	}else {
		return 'sobresaliente rey'
	}
}


console.log(calcularResultadoDelExamen(3))
console.log(calcularResultadoDelExamen(5))
console.log(calcularResultadoDelExamen(8))
console.log(calcularResultadoDelExamen(10))
console.log(calcularResultadoDelExamen(26))