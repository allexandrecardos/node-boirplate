import { ExpressClient } from '../@core/express';

const { app, upload } = ExpressClient({
	multer: { dirMulter: 'uploads' },
	morganFormat: 'dev',
	cors: {
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: false,
	},
	publicPath: 'public',
});

export { app, upload };
