import { isValidNumber } from "../utils/validation.js";

export function soma(a, b) {

    if (!isValidNumber(a) || !isValidNumber(b)) {
        
      throw new Error(`soma(a, b) espera dois números válidos. ` +
      `Recebido: a=${a} (tipo: ${typeof a}), b=${b} (tipo: ${typeof b})`
    );
    }

    return a + b;
}