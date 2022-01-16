const mario = {
	padre: 'adam',
	madre: 'eva',
}

const luigi = {
	padre: 'adam',
	madre: 'eva',
}

function sonHermanos (persona1, persona2) {
	if (persona1.padre === persona2.padre && persona1.madre === persona2.madre) {
		return true
	}else {
		return false
	}
}

console.log(sonHermanos(mario, luigi))