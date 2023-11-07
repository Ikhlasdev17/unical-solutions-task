const scopes = '[][][]{}{}'

function checkScopes(scopes) {
	let splitedScopes = scopes
	for (let i = 0; i < scopes.length; i++) {
		splitedScopes = splitedScopes
			.split('[]')
			.join('')
			.split('()')
			.join('')
			.split('{}')
			.join('')
	}

	return splitedScopes.length === 0 ? 'YES' : 'NO'
}

const result = checkScopes(scopes)
console.log(result)

// Tekshirilishi kerak bo'lgan qavslar aniq bo'lganligi uchun split orqali o'sha qavslarni to'g'ri turganlarini stringdan chiqarib tashladim. Agar stringda yana belgilar qolsa demak ular to'g'ri emas va function NO javobini qaytardi, aksi bo'lsa YES.
