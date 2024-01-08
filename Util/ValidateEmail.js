const emailFormat = /[^\s@]+@[^\s@]+\.[^\s@]+/i;

const isValidEmail = (email) => emailFormat.test(email);

module.exports = { isValidEmail };