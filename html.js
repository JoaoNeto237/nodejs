const express = require('express');
const app = express();

//Criacao e passando rota
app.get('/', (req,res)=>{
    //res.send serve para enviar uma mensagem
    //res.sendFile serve para mandar um arquivo
    //__dirname serve para retornar um diretorio padrao da aplicacao diretorio raiz
    res.sendFile(__dirname + "/html/index.html");
});



app.listen(2000, function(){
    console.log(`Servidor rodando na porta `)
});
