//Constante EXPRESS recebendo o Required que vai incluir o "EXPRESS"
const express = require('express');

//Constate APP executa as funções do express. e Posso usar para Manipular o EXPRESS
const app = express();

//Utilizo o APP e dou um use para falar que eu quero trabalhar com dados no formato Json.
app.use(express.json());

//Utilizo APP.GET que é a rota dou um "/" para falar que é da raiz mesmo, passo os dois parametros 
//REQ = Requisição e RES = Resposta. dou um RES.JSON no RETURN para falar que eu quero uma Resposta
// do tipo Json com a seguinte resposta(Teste: "API com Metodos GET e POST") para quem fizer a Requisição.
app.get("/", (req, res)=>{
    return res.json({Teste: "API com Metodos GET e POST"});
});

//Utilizo APP.POST para falar que se a requisição for feita por um metodo POST eu recebo, 
//igual o GET e passo o RES, depois dou um "/" para falar que é da raiz mesmo, passo os dois
// parametros REQ = Requisição e RES = Resposta. dou um RES.JSON no RETURN para falar que eu 
//quero uma Resposta do tipo Json com a seguinte resposta(Teste: "API com Metodos GET e POST") para quem fizer a Requisição.
app.post("/", (req, res)=>{
    return res.json({Teste: "API com Metodos GET e POST"});
});

//Utilizo o APP, para utilizar a funções do EXPRESS e dou um LISTEN
// para rodar o Servidor e passando a PORTA 8080. e passo uma mensagem para verificação.
app.listen(8080, () => {
    console.log("servidor iniciado na porta 8080: http://localhost:8080/");
});