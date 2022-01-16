function calcularResultadoDelExamen (nota) {
	if  (nota < 4) {
		return 'aplazado'	
	}else {
		return 'aprobado'
	}
}

console.log(calcularResultadoDelExamen(2))