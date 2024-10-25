const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    if (event.httpMethod === 'POST') {
        const data = JSON.parse(event.body);
        const nome = data.nome;
        const comentario = data.comentario;

        const commentData = `Nome: ${nome}\nComentário: ${comentario}\n\n`;
        const filePath = path.join(__dirname, 'comentarios.txt');

        fs.appendFile(filePath, commentData)}