import { soma } from "../index.js";
import assert from 'node:assert';

function testar(descricao, fun) {
   try {
    fun();
    console.log(`${descricao}`);
  } catch (erro) {
    console.log(`${descricao}`);
    console.log(`   ${erro.message}`);
  }
}

testar('soma(3, 2) deve ser 5', () => {
assert.strictEqual(soma(3, 2), 5); });

testar('soma(10, 20) deve ser 30', () => {
assert.strictEqual(soma(10, 20), 30);});

testar('soma(-1, 1) deve ser 0', () => {
assert.strictEqual(soma(-1, 1), 0);});

//console.log("Todos os testes passaram!");