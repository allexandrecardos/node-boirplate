import { router } from "../@core/express";
import { OrderController } from "../controllers/orderController";

router.get('/orders', OrderController.index)
router.post('/orders', OrderController.create)

export const orderRoutes = router