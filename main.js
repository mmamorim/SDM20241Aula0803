import express from 'express'
const app = express()
const PORT = 3000

let qtdeAcessosRaiz = 0
let qtdeAcessosMensagem = 0

app.get('/', function (req, res) {
    console.log('Opa! Alguém fez requisição GET no caminho /');
    qtdeAcessosRaiz++;
    console.log("qtdeAcessosRaiz",qtdeAcessosRaiz);
    res.send('HOME com acessos: '+qtdeAcessosRaiz)
})

app.get('/mensagem', function (req, res) {
    console.log('Opa! Alguém fez requisição GET no caminho /mensagem');
    qtdeAcessosMensagem++;
    console.log("qtdeAcessosMensagem",qtdeAcessosMensagem);
    res.send('Uma mensagem para vc!com acessos: '+qtdeAcessosMensagem)
})

app.listen(PORT, function () {
    console.log("Servidor escutando na porta: " + PORT);
})