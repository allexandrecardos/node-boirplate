import dotenv from 'dotenv';

type EnviromentInitializerProps = {
	pathEnv?: string;
	encoding?: string;
	debug?: boolean;
	override?: boolean;
};

const EnviromentInitializer = (props: EnviromentInitializerProps) => {
	const env = dotenv.config({
		path: props.pathEnv,
		encoding: props.encoding,
		debug: props.debug,
		override: props.override,
	});
	return env.parsed;
};

const ENVIROMENTS = {
	port: process.env.PORT || 3000,
	urlProject: process.env.URL_PROJECT || 'http://localhost',
};

export { EnviromentInitializer, ENVIROMENTS };
