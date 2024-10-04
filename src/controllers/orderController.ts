import { Request, Response } from 'express';
import { HTTP_CODES } from '../constants/HttpCode';

abstract class OrderController {
	static async index(_req: Request, res: Response) {
		return res.status(HTTP_CODES.OK).json({
			status: HTTP_CODES.OK,
			message: 'teste',
		});
	}

	static async create(req: Request, res: Response) {
		// const { order, status } = OrderService.create(req.body)
		// return res.status(status).json(order)
	}
}

export { OrderController };
