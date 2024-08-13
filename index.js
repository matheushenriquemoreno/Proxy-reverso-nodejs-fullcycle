import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const app = express();
app.use(express.json())
const port = 3000;

for (let i = 1; i <= 10; i++) {
  await prisma.User.create({
    data: {
      nome: "Matheus" + i,
      dataCriacao: new Date().toISOString(),
      idade: i + 12
    },
  })
}

app.get('/', async (requisicao, response) => {
  const users = await prisma.User.findMany()
  let nomes = '';

  users.forEach(element => {
        nomes += `${element.nome} <br> `
  })
  
  response.status(200).send(
    `<h1>Full Cycle Rocks!</h1>\n
    ${nomes}`
  )
})

app.post('/CreateItem', async (requisicao, response) => {
  const { nome, idade } = requisicao.body;
  if (!nome) {
    response.status(400).send('Nome obrigatorio')
    return;
  }
  if (!idade) {
    response.status(400).send('Idade obrigatoria!')
    return;
  }

  await prisma.User.create({
    data: {
      nome: nome,
      dataCriacao: new Date().toISOString(),
      idade: idade
    },
  })


  response.status(200).send('Item criado')
})

app.listen(port, () => {
  console.log("Rodando na porta: " + port)
})




