import express from 'express';
import cors from 'cors';
import multer from 'multer';
import morgan from 'morgan';

type CorsOptions = {
	origin: string;
	methods: string[];
	allowedHeaders: string[];
	credentials: boolean;
};

type MulterOptions = {
	dirMulter?: string;
};

type ExpressClientType = {
	morganFormat: 'dev' | 'combined' | 'common' | 'short' | 'tiny';
	publicPath?: string;
	multer?: MulterOptions;
	cors?: CorsOptions;
};

type ExpressClientReturnType = {
	app: express.Application;
	upload: multer.Multer;
};

const ExpressClient = (props: ExpressClientType): ExpressClientReturnType => {
	const app = express();
	const upload = multer({ dest: props.multer?.dirMulter });

	// Logger
	app.use(morgan(props.morganFormat));

	// CORS
	app.use(
		cors({
			origin: props.cors?.origin,
			methods: props.cors?.methods,
			allowedHeaders: props.cors?.allowedHeaders,
			credentials: props.cors?.credentials || false,
			maxAge: 0
		}),
	);

	// Middleware
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	// Static Files
	if (props.publicPath) {
		app.use(express.static(props.publicPath));
	}

	return {
		app,
		upload,
	};
};

export { ExpressClient };
