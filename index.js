
import  express  from 'express';
import mongoose from 'mongoose'
const bd = 'mongodb+srv://bill:123@cluster0.irbhrwm.mongodb.net/?retryWrites=true&w=majority'

const server = express();
server.use(express.json());
import Estabelecimentos from './models/estabelecimentos.js'
server.get('/', async(request, response) => { 
    const estabelecimentos = await Estabelecimentos.find() 
    return response.json(estabelecimentos);
})

server.post("/estabelecimentos", async(request, response) => {
    const estabelecimento = request.body
    const newEstabelecimento = await Estabelecimentos.create(estabelecimento)
    return response.json(newEstabelecimento)
} )
mongoose.connect(bd)
.then(() => console.log('banco de dados online'))
.catch(() => console.log('error'))
server.listen(3000);