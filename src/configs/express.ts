import { ExpressClient } from '../@core/express';

const { app, upload } = ExpressClient({
	multer: { dirMulter: 'uploads' },
	morganFormat: 'dev',
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
		allowedHeaders: ['Content-Type'],
		credentials: false,
	},
	publicPath: 'public',
});

export { app, upload };
