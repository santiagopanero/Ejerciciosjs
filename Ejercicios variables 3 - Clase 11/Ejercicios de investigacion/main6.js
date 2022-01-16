const comidasPorIngrediente = {
	ingredientes: ['morron', 'lechuga', 'tomate', 'pan', 'milanesa', 'huevo', 'crema', 'salsa']
}

const resetasConPan = ['sanguche de milanesa', 'tostado', 'pan con manteca']

function obtenerRecetaPorIngredientes (ListaDeComidas, IngredienteAIncluir) {
	for (i = 0; i < comidasPorIngrediente.ingredientes; i++) {
		if (ListaDeComidas === comidasPorIngrediente.ingredientes[3]) {
		}
	}
	return resetasConPan
}

console.log(obtenerRecetaPorIngredientes(comidasPorIngrediente.ingredientes, 'pan'))