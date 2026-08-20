const esEmailValido = require('./validaciones');

test('acepta un correo con formato valido', () => {
    expect(esEmailValido('usuario@dominio.com')).toBe(true);
});

test('rechaza un correo sin arroba', () => {
    expect(esEmailValido('usuario.dominio.com')).toBe(false);
});

test('rechaza un string vacio', () => {
    expect(esEmailValido('')).toBe(false);
});