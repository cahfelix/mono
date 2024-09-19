/* Checa se é dado um valor null ou undefined ou uma string vazia *\
exports.isNullOrWhitespace = (value) => value === undefined || value === null || !value.trim();