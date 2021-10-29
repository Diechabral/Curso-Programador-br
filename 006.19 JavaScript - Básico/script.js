function criarAluno(nome, n1, n2) {
  return {
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function () {
      return (this.nota1 + this.nota2) / 2;
    },
  };
}

var turma = [
  criarAluno("igor", 9, 6),
  criarAluno("Diego", 10, 5),
  criarAluno("Marcela", 5, 7),
];

var aluno = turma[2];

console.log(aluno);
console.log(aluno.media());

turma.forEach(function (elemento) {
  console.log(elemento);
});
