var nota1 = 2;
var nota2 = 6.0;

var media = (nota1 + nota2) / 2;

var conceito = "";

if (media >= 8) {
  conceito = "otimo";
} else if (media >= 6.5) {
  conceito = "bom";
} else {
  conceito = "regular";
}
console.log(media);
console.log(conceito);

switch (conceito) {
  case "ótimo":
    console.log("Parabéns, vc é um bom aluno");
    break;
  case "bom":
    console.log("você está quase perfeito, estude mais um pouco.");
    break;
  case "regular":
    console.log("Estude mais um pouco, ainda muit ruim");
    break;
  default:
    console.log("houve algum erro");
    break;
}
