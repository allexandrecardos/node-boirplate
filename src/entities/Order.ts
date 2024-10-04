import DatabaseClient from '../database/client';

type OrderType = {
	id: string;
	user_id: string;
	total: number;
};

class Order extends DatabaseClient {
	id: string;
	user_id: string;
	total: number;

	private constructor(order: OrderType) {
		super();
		this.id = order.id;
		this.user_id = order.user_id;
		this.total = order.total;
	}

	static toEntity(data: OrderType) {
		const order = new Order(data);
		return order;
	}
}

export { Order };
