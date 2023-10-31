const express = require('express');
const cors = require('cors'); // Importe a biblioteca cors
const server = express();

server.use(express.json());
server.use(cors()); // Use o middleware cors para habilitar o CORS

const estabelecimentos = [
    {
        name: "Ronchi Beer",
        tipo: ['Cervejaria', 'Restaurante', "Bar"],
        horario: "⏰ Seg a Sáb - 11h às 00h | Dom - 11h às 22h ❌",
        descrição: 'A Ronchi Beer, fundada em 2018, é uma cervejaria que combina a produção artesanal de cervejas com uma culinária saborosa, incluindo pratos como joelho de porco. Localizada com vista para a deslumbrante Pedra Azul, ela oferece uma variedade de cervejas únicas, proporcionando aos visitantes uma experiência gastronômica memorável em um cenário magnifico.',
        endereco: 'VALE DA PEDRA - Rua Nona Elvira P. Modolo, S/N, Pedra Azul, Domingos Martins 29278000',
        instagram: 'https://www.instagram.com/ronchibeer/',
        fotoFachada: 'https://images3.motor-reserva.com.br/curl/motor_reserva/images/configuracao_estabelecimento/cliente_2620/202201271643313195ohotel.jpg'
    },
    {
        name: "Pousada Peterle",
        tipo: ["Hotel"],
        horario: "⏰ 24HRS ⏰",
        descrição: 'A Pousada Peterle, uma das mais antigas e tradicionais opções de hospedagem na encantadora região de Pedra Azul, oferece uma experiência encantadora para seus hóspedes. Com sua história rica e acolhedora hospitalidade, a pousada é conhecida por suas acomodações charmosas e aconchegantes. Os visitantes podem desfrutar de quartos confortáveis, uma atmosfera tranquila e uma localização privilegiada, que proporciona vistas deslumbrantes para a icônica Pedra Azul. A pousada é o local ideal para aqueles que desejam escapar do ritmo agitado da cidade e se conectar com a natureza exuberante da região, enquanto desfrutam do atendimento personalizado e da tranquilidade que a Pousada Peterle oferece.',
        endereco: 'Rodovia BR 262, km 88 S/n, Domingos Martins - ES, 29278-000',
        instagram: 'https://www.instagram.com/pousadapeterleoficial/',
        fotoFachada: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/63/21/b7/vista-panoramica-da-piscina.jpg'
    },
    {
        name: "Ronchi Beer",
        tipo: ['Cervejaria', 'Restaurante', "Bar"],
        horario: "⏰ Seg a Sáb - 11h às 00h | Dom - 11h às 22h ❌",
        descrição: 'A Ronchi Beer, fundada em 2018, é uma cervejaria que combina a produção artesanal de cervejas com uma culinária saborosa, incluindo pratos como joelho de porco. Localizada com vista para a deslumbrante Pedra Azul, ela oferece uma variedade de cervejas únicas, proporcionando aos visitantes uma experiência gastronômica memorável em um cenário magnifico.',
        endereco: 'VALE DA PEDRA - Rua Nona Elvira P. Modolo, S/N, Pedra Azul, Domingos Martins 29278000',
        instagram: 'https://www.instagram.com/ronchibeer/',
        fotoFachada: 'https://i.ytimg.com/vi/ELex7hKjRCM/hqdefault.jpg'
    },

   
]

server.get('/estabelecimentos', (req, res) => {
    return res.json(estabelecimentos);
})

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
