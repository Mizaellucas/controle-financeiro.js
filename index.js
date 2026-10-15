const fs = require('fs');
const conteudo = fs.readFileSync("dados.json", "utf-8");
const dadosObjeto = JSON.parse(conteudo);


const novaTransacao = {
    "id": 2,
    "descrição": "almoço",
    "valor": 20.00,
    "tipo": "despesa",
    "categoria": "aliemtação"
}

dadosObjeto.dados.push(novaTransacao);
console.log(dadosObjeto.dados);
const dadosEmTexto = JSON.stringify(dadosObjeto, null, 2);
fs.writeFileSync("dados.json", dadosEmTexto);

console.log("Dados atualizados com sucesso!");