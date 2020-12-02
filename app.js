const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    return res.json({Teste: "API com Metodos GET e POST"});
});
app.post("/", (req, res)=>{
    return res.json({Teste: "API com Metodos GET e POST"});
});

app.listen(8080, () => {
    console.log("servidor iniciado na porta 8080: http://localhost:8080/");
});