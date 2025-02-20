# GeradorPessoasJS
## Descrição
O **GeradorPessoasJS** é uma API simples em **Node.js** que gera um array com 200 pessoas fictícias. Cada pessoa possui um **ID**, **nome** e **idade** aleatória. Esse projeto utiliza o framework **Express** para criar uma API RESTful que disponibiliza os dados em formato JSON. Para iniciar o projeto, siga os passos abaixo: instale as dependências necessárias com: `npm install`. Agora, inicie o servidor com: `node index.js`. O servidor estará rodando na porta `3003`, e você pode acessar a API em: [http://localhost:3003/pessoas](http://localhost:3003/pessoas). A URL retornará um **JSON** contendo 200 pessoas, cada uma com **ID**, **nome** e **idade** gerados aleatoriamente. Quando você acessar a rota `/pessoas`, a API retornará uma resposta como o exemplo abaixo: 
```json
[
  { "id": 1, "nome": "João Silva", "idade": 29 },
  { "id": 2, "nome": "Maria Oliveira", "idade": 34 },
  { "id": 3, "nome": "José Pereira", "idade": 25 },
  ...
]
