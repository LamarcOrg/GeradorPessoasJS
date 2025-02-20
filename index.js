const express = require('express');
const app = express();
const port = 3003

const gerarNome = (indice) => {
    const nomes = ['João', 'Maria', 'José', 'Ana', 'Carlos', 'Lucas', 'Julia', 'Fernanda', 'Ricardo', 'Paula'];
    const sobrenomes = ['Silva', 'Oliveira', 'Pereira', 'Costa', 'Santos', 'Souza', 'Almeida', 'Rodrigues', 'Mendes', 'Gomes'];

    const nome = nomes[indice % nomes.length];
    const sobrenome = sobrenomes[indice % sobrenomes.length];

    return `${nome} ${sobrenome}`;
};

const gerarIdade = () => {
    return Math.floor(Math.random() * (60 - 18 + 1)) + 18;
};

const pessoas = Array.from({ length: 200 }, (_, index) => ({
    id: index + 1,
    nome: gerarNome(index),
    idade: gerarIdade()
}));

app.get('/pessoas', (req, res) => {
    res.json(pessoas);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
