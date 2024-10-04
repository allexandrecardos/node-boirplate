import { AppError } from './AppError';

export class NullOfUndefinedError extends AppError {
	constructor() {
		super('Parâmetro inválido: null ou undefined detectado.', 500);
	}
}
