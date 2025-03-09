import { AppError } from "../@core/error";

export class InternalServerError extends AppError {
  constructor(message: string, details?: unknown) {
    super(message, 500, 'INTERNAL_SERVER_ERROR', details);
  }
}
