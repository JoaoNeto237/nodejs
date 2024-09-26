//http e um protocolo que permite que um cliente se comunique com o servidor

//Importando o http
const http = require('node:http');

//cria o servidor http
const server = http.createServer((req,res)=>{
    res.end("Ola Mundo!");
    //req, res sao os parametros da funcao de callback
    //res.end envia uma mensagem
});
server.listen(3000);e
//.listen diz qual a porta que vai abrir

console.log("O servidor esta rodando!");
/**
 * // Importa o módulo http
const http = require('http');

// Cria o servidor
const server = http.createServer((req, res) => {
    // Define o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Envia a resposta para o cliente
    res.end('Olá, Mundo! Este é um servidor HTTP básico em Node.js\n');
});

// Define a porta em que o servidor irá ouvir as requisições
const port = 3000;

// Inicia o servidor
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});
 */
