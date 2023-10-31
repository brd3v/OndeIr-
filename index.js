import express from 'express';
import cors from 'cors'; 
const server = express();
import mongoose from 'mongoose'
import Estabelecimentos from './modules/estabelecimentos.js'

server.use(express.json());
server.use(cors()); // Use o middleware cors para habilitar o CORS

const estabelecimentos = [
  

   
]

server.get('/estabelecimentos', (req, res) => {
    return res.json(estabelecimentos);
})

server.post('/estabelecimentos', async (req, res) => {
        estabelecimentos.push(req.body)
        res.status(201).send('estabelecimento cadastrado com sucesso!')
})

mongoose.connect('mongodb+srv://brunim1233:outono123@cluster0.atlykqg.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('banco de dados conectado'))
.catch(() => console.log('error'))
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
