import { router } from '../@core/express';
import { UserController } from '../controllers/userController';

router.get('/user', UserController.index);

export const userRoutes = router;
