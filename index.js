const express = require('express');
const cors = require('cors'); // Importe a biblioteca cors
const server = express();

server.use(express.json());
server.use(cors()); // Use o middleware cors para habilitar o CORS

const estabelecimentos = [
    {
        name: "Elton dinho",
        tipo: 'restaurante'
    },
    {
        name: "vere",
        tipo: 'artesanato'
    },
    {
        name: "Parque estadual",
        tipo: 'restaurante'
    }
]

server.get('/estabelecimentos', (req, res) => {
    return res.json(estabelecimentos);
})

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
