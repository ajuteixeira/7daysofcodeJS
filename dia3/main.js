const areaAtual = prompt('Olá! Você quer seguir para área de Front-End ou de Back-End? Responda [F] para Front e [B] para Back:');

if (areaAtual === "F") {
  let linguagemFront = prompt('Que legal! Em Front você deseja aprender React [R] ou Vue [V]?');
  if (linguagemFront === "R") {
    alert('React é bem legal!');
  } else if (linguagemFront === "V") {
    alert('Vue é mesmo demais!');
  }
} else if (areaAtual === "B") {
  let linguagemBack = prompt('Que legal! Em Back você deseja aprender C# [C] ou Java [J]?');
  if (linguagemBack === "C") {
    alert('C# é bem legal!');
  } else if (linguagemBack === "J") {
    alert('Java é interessante mesmo!');
  }
} else {
  alert('Ops! Você não digitou uma opção de área válida.');
}

const especialidadeOuFullstack = prompt('Você pretende seguir se especializando nessa área ou seguir se desenvolvendo para se tornar Fullstack? Digite [ESPECIALIZAR] ou [FULLSTACK]:');

if (especialidadeOuFullstack === "ESPECIALIZAR") {
  alert('Massa! Seguir na área é uma boa escolha!');
} else if (especialidadeOuFullstack === "FULLSTACK") {
  alert('Wow! Ser Fullstack é um baita desafio. Você vai gostar!');
} else {
  alert('Ops! Você não digitou uma opção válida.');
}

let mensagem = prompt('Tem mais alguma tecnologia que você gostaria de aprender? [SIM] ou [NÃO]:');

while (mensagem === "SIM") {
  let novaTecnologia = prompt("Qual?");
  alert(`Nossa, você vai amar estudar ${novaTecnologia}!`)
  mensagem = prompt('Quer incluir mais uma tecnologia nos seus estudos? "SIM" ou "NÃO":');
}

if (mensagem === "NÃO") {
  alert('Ok! Então bons estudos :)');
} else {
  alert('Ops! Você não digitou uma opção válida.');
}
