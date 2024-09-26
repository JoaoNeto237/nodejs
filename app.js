const express = require('express');
const app = express();

//Criacao e passando rota
app.get('/', (req,res)=>{
    //res.send serve para enviar uma mensagem
    res.send('Seja bem vindo ao meu app!');
});

//Criar outra pagina
app.get('/sobre', (req, res)=>{
    res.send('Minha nova pagina, sobre');
});

//cria pagina e usa parametros
app.get('/ola/:nome/:cargo', (req,res)=>{
    //res.send serve para enviar uma mensagem
    //envia os parametros e faz a requisicao deles
    res.send(req.params);
});


//Criacao da porta e porta esta sendo escutada com o listen passando a porta 3000, juntamente com uma funcao de callback
app.listen(2000, function(){
    console.log(`Servidor rodando na porta `)
});
