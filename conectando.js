//Parte do codigo que conecta o banco com o codigo,passando os parametros necessarios: nome do banco, usuario, senha, host = onde esta o banco, dialect = qual o banco esta usando, no caso o mysql
const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'Uchih@itach1', {
    host: "localhost",
    dialect: 'mysql'
});

//autenticacao para ver se a conecao foi feita corretamente
/** 
sequelize.authenticate().then(()=>{
    console.log('Conectado com sucesso')
}).catch((erro)=>{
    console.log('Falha ao se conectar' + erro)
})
    */

//Crio a constante Postagem que vai ser uma tabela, estou criando uma tabela no banco diretamente do node, titulo e conteudo sao colunas na tabela e type define o tipo de cada campo
const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    },

});

Postagem.create({
    titulo:'Um titulo qualquer',
    conteudo: 'dagfddddddddddddddddddd'
});

const Usuario = sequelize.define('usuarios',{
    Nome:{
        type: Sequelize.STRING
    },
    Sobrenoe:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
});



//Usuario.sync({force: true});

Usuario.create({
    Nome: 'Joao',
    Sobrenome: 'Cunha',
    idade: 20,
    email: 'joaos@gmail.com'
})

//Assim que criar algo, comente ou apague para que nao duplique