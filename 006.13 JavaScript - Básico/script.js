// var alunos = new Array("Diego", "José", "Igor", "Mariana");

// var aluno1 = "igor;";
// var aluno2 = "Diego;";
// var aluno3 = "Marcos;";
// var aluno4 = "Elena;";
// var aluno5 = "Antoio;";
// var aluno6 = "Juliana;";

// console.log(alunos[0]);

var alunos = ["igor", "josé", "marcos", "mariana", "joana", "william", "maria"];

// for (var i = 0; i < alunos.length; i++) {
//   console.log(alunos[i]);
// } // implementação automatica sem mexer no codigo

for (var aluno of alunos ){ 
  console.log(aluno)
}