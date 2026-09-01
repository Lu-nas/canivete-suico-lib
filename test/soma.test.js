import { soma } from "../src/math/soma.js";

function testar(descricao, resultado, esperado) {
  if (resultado === esperado) {
    console.log(`${descricao}`);
  } else {
    console.log(`${descricao} — esperado: ${esperado}, recebido: ${resultado}`);
  }
}

testar('soma(3, 2) deve ser 5', soma(3, 2), 5);
testar('soma(10, 20) deve ser 30', soma(10, 20), 30);
testar('soma(-1, 1) deve ser 0', soma(-1, 1), 0);
