import {validate} from '../src/validateCpf'
test('deve validar um cpf', () => {
	// given
	const cpf = "97456321558"
	// when
	const valid = validate(cpf);
	// then
	expect(valid).toBe(true);
})
