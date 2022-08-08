let calcularOuNao = prompt("Olá! Você deseja calcular algo nesta calculadora? Digite SIM p/ iniciar.\n\nDigite SAIR p/ encerrar o programa.");

while (calcularOuNao == "SIM") {
  let operacao = prompt("Ok! Digite qual operação deseja realizar: SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO ou DIVISÃO.");

  let num1 = prompt("Digite o primeiro número da operação:")
  let num2 = prompt("Agora digite o segundo número da operação:")
  let resultado;

  // funções das operações
  function soma(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }

  function subtracao(num1, num2) {
    return num1 - num2;
  }

  function multiplicacao(num1, num2) {
    return num1 * num2;
  }

  function divisao(num1, num2) {
    if (num2 === 0) {
      alert("Não é possível dividir por zero!");
    } else {
      return num1 / num2;
    }
  }

  // operações e resultados
  switch (operacao) {
    case "SOMA":
      resultado = soma(num1, num2);
      alert(`O resultado da ${operacao} é: ${resultado}`);
      break;

    case "SUBTRAÇÃO":
      resultado = subtracao(num1, num2);
      alert(`O resultado da ${operacao} é: ${resultado}`);
      break;

    case "MULTIPLICAÇÃO":
      resultado = multiplicacao(num1, num2);
      alert(`O resultado da ${operacao} é: ${resultado}`);
      break;

    case "DIVISÃO":
      resultado = divisao(num1, num2);
      alert(`O resultado da ${operacao} é: ${resultado}`);
      break;

    default:
      alert("Opa! Você não inseriu uma operação válida!");
  }

  calcularOuNao = prompt("Deseja realizar mais alguma operação? Digite SIM p/ continuar calculando. \n\nDigite SAIR p/ encerrar o programa.");
}

if (calcularOuNao == "SAIR") {
  alert("Blz! Chega de contas :)")
}
