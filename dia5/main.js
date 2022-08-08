let organicos = [];
let congelados = [];
let pereciveis = [];
let outros = [];

let adicionarComida = prompt("Você deseja adicionar uma comida na sua lista de compras? Digite SIM ou NÃO:");

while (adicionarComida == "SIM") {
  let novaComida = prompt("Qual comida deseja adicionar?")
  let categoria = prompt(`Ok! Digite em qual categoria deseja adicionar "${novaComida}": ORGÂNICOS, CONGELADOS, PERECÍVEIS ou OUTROS.`);

  // adicionando a comida à categoria escolhida
  if (categoria == "ORGÂNICOS") {
    organicos.push(novaComida);
    alert(`Item "${novaComida}" adicionado com sucesso na categoria ${categoria}`);
  } else if (categoria == "CONGELADOS") {
    congelados.push(novaComida);
    alert(`Item "${novaComida}" adicionado com sucesso na categoria ${categoria}`);
  } else if (categoria == "PERECÍVEIS") {
    pereciveis.push(novaComida);
    alert(`Item "${novaComida}" adicionado com sucesso na categoria ${categoria}`);
  } else if (categoria == "OUTROS") {
    outros.push(novaComida);
    alert(`Item "${novaComida}" adicionado com sucesso na categoria ${categoria}`);
  } else {
    alert("Você não inseriu uma categoriao válida. Utilize apenas letras MAIÚSCULAS para digitar.");
  }

  adicionarComida = prompt("Deseja adicionar mais uma comida na sua lista de compras? Digite SIM ou NÃO:");
}

// quando não deseja adicionar mais comidas
if (adicionarComida == "NÃO") {
  alert("Ok! :)");
}

// lista final unindo categorias + comidas adicionadas a cada uma
alert(`[**Lista de compras**] : \n ORGÂNICOS-----: ${organicos} \n CONGELADOS-----: ${congelados} \n PERECÍVEIS-----: ${pereciveis} \n OUTROS-----: ${outros}`)
