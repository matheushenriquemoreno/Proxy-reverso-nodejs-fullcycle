# Repositorio para configuração do desafio de criar um proxy reveso, entre uma aplicação node junto com o Ngix, e também criar a conexão com banco de dados.


## Build do projeto

Necessario ter o Docker instalado no ambiente de desenvolvimento.

Com isso basta rodar o seginte comando:
```bash
docker-compose up --build
```
Após a execução tera os seguintes container: 

![image](https://github.com/user-attachments/assets/363c4a66-af9c-4d3f-981a-6ef285a3a520)

Posteriormente basta acessar a o localhost na porta 8089 conforme configurado no docker-compose que será possivel ver a listagem de dados cadastrado no banco de dados.
