import { userRoutes } from '@routes/userRoutes';
import { ENVIROMENTS } from './@core/env';
import { initEnv } from './configs/env';
import { app } from './configs/express';
import { orderRoutes } from './routes/orderRoutes';
import { concat } from './utils';

initEnv();

app.use('/api', userRoutes);
app.use('/api', orderRoutes);

app.listen(ENVIROMENTS.port, () => {
	console.log(concat(['Server running on ', ENVIROMENTS.urlProject, ':', ENVIROMENTS.port]));
});
