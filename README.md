## Repositório para configuração do desafio de criar um proxy reveso, entre uma aplicação node.js em conjunto ao Nginx, e também criar um banco de dados e realizar cadastro e busca de dados.

### Conteudo aprendido
- Funcionamento de um proxy reverso;
- Criação e configuração de images Docker;
- Criação de um docker compose complexo, com vários estágios e implementando dependência entre contêiner, e utilização de networks;
- Node.js junto com a ORM Prisma, além de aplicar migrations ao iniciar o container;

## Build do projeto

Necessario ter o Docker instalado no ambiente de desenvolvimento.
Com isso basta rodar o seginte comando:

```bash
docker-compose up --build
```
Após a execução tera os seguintes containers: 

![image](https://github.com/user-attachments/assets/363c4a66-af9c-4d3f-981a-6ef285a3a520)

Posteriormente basta acessar a o localhost na porta 8089 conforme configurado no docker-compose que será possivel ver a listagem de dados cadastrado no banco de dados.
