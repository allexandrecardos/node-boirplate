import { BaseError } from "./BaseError";

export class NullOfUndefinedError extends BaseError {
  constructor() {
    super('Parâmetro inválido: null ou undefined detectado.', 500);
  }
}