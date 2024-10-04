import { PrismaClient } from '@prisma/client';

class DatabaseClient {
	protected prisma: PrismaClient;
	private static instance: PrismaClient | null = null;

	constructor() {
		if (!DatabaseClient.instance) {
			DatabaseClient.instance = new PrismaClient();
			this.setupGracefulShutdown();
		}

		this.prisma = DatabaseClient.instance;
	}

	async disconnect() {
		if (DatabaseClient.instance) {
			await DatabaseClient.instance.$disconnect();
			DatabaseClient.instance = null;
			console.log('Prisma desconectado');
		}
	}

	private setupGracefulShutdown() {
		const disconnectPrisma = async () => {
			if (DatabaseClient.instance) {
				console.log('Desconectando automaticamente do Prisma...');
				await this.disconnect();
			}
		};

		process.on('exit', disconnectPrisma);

		process.on('SIGINT', async () => {
			await disconnectPrisma();
			process.exit(0);
		});

		process.on('SIGTERM', async () => {
			await disconnectPrisma();
			process.exit(0);
		});

		process.on('uncaughtException', async error => {
			console.error('Erro não tratado:', error);
			await disconnectPrisma();
			process.exit(1);
		});
	}
}

export default DatabaseClient;
