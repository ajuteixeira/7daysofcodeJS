const numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0); 
let chute = "";
let chances = "";
let acertou = false;

// restringindo o número de chances
for (chances = 0; chances < 3; chances++) {
  chute = prompt("Qual é o número secreto? Dê um chute!");

  // em caso de acerto no chute
  if (chute == numeroSecreto) {
    alert(`Uau! Você acertou! O número secreto realmente é ${numeroSecreto}!`);
    acertou = true;
    break;
  }
// em caso de erro
  alert("Errou!");
} 

// fim de jogo após 3 tentativas erradas
if (!acertou) {
  alert(`Fim de jogo! :( O número secreto era ${numeroSecreto}.`);
}
