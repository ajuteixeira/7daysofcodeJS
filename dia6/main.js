let organicos = [];
let congelados = [];
let pereciveis = [];
let outros = [];
let adicionarComida = "";

if (organicos.length === 0 && congelados.length === 0 && pereciveis.length === 0 && outros.length === 0) {
  adicionarComida = prompt("Você deseja adicionar uma comida na sua lista de compras? Digite SIM ou NÃO:");
} else {
  adicionarComida = prompt("Você deseja adicionar uma comida na sua lista de compras? Digite SIM, NÃO ou REMOVER:");
}

// se a resposta for SIM
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

  adicionarComida = prompt("Você deseja adicionar uma comida na sua lista de compras? Digite SIM, NÃO ou REMOVER:");
}

// se a resposta for NÃO ou REMOVER
if (adicionarComida == "NÃO") {
  alert("Ok! :)");
} else if (adicionarComida == "REMOVER") {
  // se a lista estiver vazia
  if (organicos.length === 0 && congelados.length === 0 && pereciveis.length === 0 && outros.length === 0) {
    alert(`A lista está vazia!`);
  } else {
    // se a lista não estiver vazia
    let removerComida = prompt(`[Esta é a sua atual lista de compras]: \n ORGÂNICOS-----: ${organicos} \n CONGELADOS-----: ${congelados} \n PERECÍVEIS-----: ${pereciveis} \n OUTROS-----: ${outros} \n\n -----> Qual comida deseja remover?`)

    if (organicos.indexOf(removerComida) != -1) {
      organicos.splice(organicos.indexOf(removerComida), 1);
      alert(`O item "${removerComida}" foi removido com sucesso!`);
    } else if (congelados.indexOf(removerComida) != -1) {
      congelados.splice(congelados.indexOf(removerComida), 1);
      alert(`O item "${removerComida}" foi removido com sucesso!`);
    } else if (pereciveis.indexOf(removerComida) != -1) {
      pereciveis.splice(pereciveis.indexOf(removerComida), 1);
      alert(`O item "${removerComida}" foi removido com sucesso!`);
    } else if (outros.indexOf(removerComida) != -1) {
      outros.splice(outros.indexOf(removerComida), 1);
      alert(`O item "${removerComida}" foi removido com sucesso!`);
    } else {
      alert(`Não foi possível encontrar o item "${removerComida}" dentro da lista!`)
    }
  }
}

// lista final unindo categorias + comidas adicionadas a cada uma
alert(`[**Lista de compras finalizada**] : \n ORGÂNICOS-----: ${organicos} \n CONGELADOS-----: ${congelados} \n PERECÍVEIS-----: ${pereciveis} \n OUTROS-----: ${outros}`)
