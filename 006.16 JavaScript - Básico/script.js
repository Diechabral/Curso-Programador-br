// nome do aluno - noata 1 - nota 2 - meédia - aprovado/reprovado

var nomes = ["Diego", "juliana", "Elena", "Maria"];
var notasA = [7, 9, 6, 9];
var notasB = [10, 8, 4, 2];

function media(n1, n2) {
  return (n1 + n2) / 2;
}

function passou(media) {
  if (media > 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
for (var index in nomes) {
  var nota1 = notasA[index];
  var nota2 = notasB[index];

  var m = media(nota1, nota2);

  console.log(
    nomes[index] + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m)
  );
}
