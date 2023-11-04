import express from 'express'
import cors from 'cors'
const server = express()
server.use(cors()); // Use o middleware cors

const roteirosCasal =[ 
     {
        name: "Casal",
       diaUm: "Chegue à sua pousada sem pressa, faça o check-in em um aconchegante hotel ou pousada. Logo após se instalarem, vamos explorar as redondezas. Lembre-se de que Pedra Azul é uma localidade pequena, repleta de natureza em todos os lugares. Conheça o hotel/pousada e suas proximidades, que geralmente se estendem a, no máximo, 1 km. Você pode caminhar ou utilizar bicicletas. À noite, desfrutem de um jantar romântico em um restaurante local com boa comida e vinho, evitando bares.",
        diaDois: "Realizem alguma atividade física juntos, como uma caminhada pelas dependências da pousada, caso ela possua uma área grande, ou, melhor ainda, dirijam-se à Rota do Lagarto. Lá, vocês encontrarão diversas opções de estacionamento e poderão caminhar até o Portal da Pedra Azul, localizado estrategicamente aos pés da Pedra. No momento do almoço, escolham um restaurante típico da região que sirva comida caseira. Para o lazer, há diversas opções interessantes disponíveis; informe-se na sua pousada. Após o almoço e com as energias recarregadas, é hora de subir a Pedra Azul. Certifiquem-se de verificar as condições climáticas, pois há a opção de escalar até as piscinas naturais, um passeio que não pode faltar para um casal. À noite, aproveitem as melhores opções para o segundo dia do roteiro. Normalmente, é um sábado para os turistas que chegam na sexta-feira, e durante o fim de semana, há muitas opções de música em bares e restaurantes. Além disso, há pubs que oferecem atrações até altas horas da madrugada, proporcionando uma ótima oportunidade para relaxar e se divertir.",
        diaTres: "Neste ponto, vocês provavelmente não terão explorado tudo, mas terão experimentado muitas das atrações de Pedra Azul. Lembrem-se de que, em poucas horas, vocês estarão pegando a estrada, portanto, evitem bebidas alcoólicas. Uma boa sugestão é desfrutar de um café da manhã reforçado na pousada ou em um café colonial. Vocês até podem fazer o check-out para evitar a necessidade de retornar à pousada. Façam um último tour pelas famílias tradicionais da região e aprendam mais sobre a cultura local. Todas essas famílias comercializam produtos da região e artesanatos. Espero que tenham apreciado esse roteiro para casais em Pedra Azul.",
        img : "https://cdn.pixabay.com/photo/2014/09/07/16/53/couple-437968_1280.jpg"
    }]
    const roteirosSolteiro = [
        {
          name: "Solteiro",
          diaUm: "Chegue à sua pousada em Pedra Azul sem pressa, faça o check-in em um aconchegante hotel ou pousada. Após se instalar, aproveite o dia para explorar a beleza natural ao redor. Você pode fazer uma caminhada pelas trilhas próximas à pousada ou alugar uma bicicleta para explorar a região. À noite, desfrute de um jantar em um restaurante local com pratos tradicionais da região.",
          diaDois: "No segundo dia, aventure-se na natureza. Visite o Parque Estadual de Pedra Azul e faça uma trilha para apreciar as vistas deslumbrantes. À tarde, aproveite para relaxar em uma cachoeira próxima ou visitar o Mirante da Pedra Azul. À noite, explore as opções de entretenimento local, como o Ronchi Beer Azurra Pub, onde você pode desfrutar de música ao vivo e a atmosfera acolhedora.",
          diaTres: "No terceiro dia, antes de fazer o check-out da pousada, faça uma visita à Feirinha de Artesanato local para comprar lembranças da sua viagem. Espero que tenha aproveitado ao máximo sua estadia em Pedra Azul como solteiro ou com amigos.",
          img: "https://avozdaserra.com.br/sites/default/files/noticias/ssow_0.jpg"
        }
      ];
      
const roteirosFamilia = [
    {
      name: "Família",
      diaUm: "Chegue à sua pousada em Pedra Azul sem pressa e faça o check-in em um aconchegante hotel ou pousada. Após se instalar, aproveite o dia para explorar as atrações próximas. Comece visitando o Parque Estadual de Pedra Azul, onde você e sua família podem fazer uma caminhada leve e desfrutar das vistas deslumbrantes da Pedra Azul. À noite, desfrutem de um jantar em um restaurante local que ofereça pratos típicos da região.",
      diaDois: "No segundo dia, é hora de uma aventura em família. Visitem o Parque da Pedra Azul, onde podem fazer trilhas, piqueniques e explorar a natureza. Se aventurem nas trilhas da região para apreciar a beleza da fauna e flora local. À tarde, relaxem na pousada ou hotel e aproveitem as instalações. À noite, desfrutem de um jantar tranquilo em família.",
      diaTres: "No terceiro dia, depois de fazer o check-out da pousada, aproveitem para visitar o Zoológico de Marechal Floriano em uma curta viagem de carro. O zoológico oferece uma oportunidade única para as crianças conhecerem animais de todo o mundo. Após a visita ao zoológico, desfrutem de um almoço em Marechal Floriano antes de iniciar sua viagem de volta para casa. Espero que tenham aproveitado essa viagem em família e que tenham criado memórias inesquecíveis.",
      img: "https://cdn.pixabay.com/photo/2017/10/13/12/29/hands-2847508_1280.jpg"
    }
  ];
  
 


server.get("/", (req, res) => {
    return res.json(roteirosCasal)
})
server.get('/solteiro', (req, res) => {
    return res.json(roteirosSolteiro)
})
server.get('/familia', (req, res) => res.json(roteirosFamilia))
server.post('/',(req, res) => {
   // Você pode acessar os dados do corpo da solicitação POST usando req.body
   const data = req.body;

   // Faça algo com os dados, por exemplo, envie uma resposta
   res.json({ message: 'Recebido com sucesso', data });
})
server.listen(3000, () => {
    console.log('\u{1F534} serveer rodando na porta 3000\u{1F534}')
})