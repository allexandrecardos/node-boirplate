import { AppError } from "../@core/error";

export class NullOrUndefinedError extends AppError {
	constructor(message: string, details?: unknown) {
		super(message, 422, 'NULL_OR_UNDEFINED', details);
	}
}
