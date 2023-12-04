const prompt = require('prompt-sync')();

var alturas = [];
var alunos = [];
var cont = 0;
var aux = 0;

// Implementar a entrada de dados
for (i = 0; i <= 9; i++) {
  alturas.push(parseFloat(prompt("Digite a altura: ")));


}
// Implementar o processamento de dados

// Fazer for dentro de for
for (i = 0; i <= 9; i++) {
  var cont = 0;
  for (j = 0; j <= 9; j++) {
    if (alturas[i] > alturas[j]) {


      cont++;
    }

  }
  alunos.push(cont);


}
// Implementar a saída de dados
for (i = 0; i <= 9; i++) {
  console.log("Alunos", i, ": maior que", alunos[i], "aluno(s)");

}