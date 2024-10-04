process.on('uncaughtException', error => {
	console.error('[ERROR]', error.message);
	process.exit(1);
});
