

function calcmedia(n1, n2) {
  return (n1 * 2 + n2) / 3;
}

var aluno = {
  nome: "igor",
  notas: [5, 6],

  media: calcmedia
  }

var aluno1 = {
  nome: "Diego",
  notas: [10, 7],

  media: calcmedia
 
}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

console.log(aluno1.nome);
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));
