function esEmailValido(email) {
    if (typeof email !== 'string' || email.trim() === '') {
        return false;
    }
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

module.exports = esEmailValido;
