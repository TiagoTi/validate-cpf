import {validate} from '../src/validateCpf'


test.only.each([
	['comum', '97456321558', true],
	['com final zero', '71428793860', true],
	['com final zero zero', '87748248800', true],
	['com sepradores', '974.563,215-58', true],

	['tamanho menor 11', '9745632155', false],
	['tamanho maior 14', '974563215581112', false],
	['invalido', '97456321551', false],

	// ['valor null', null, false],
	// ['valor undefined', undefined, false],
])('deve validar um cpf %s', (_, cpf, expectd) => {
	// given
	// when
	const valid = validate(cpf);
	// then
	expect(valid).toBe(expectd);
})

