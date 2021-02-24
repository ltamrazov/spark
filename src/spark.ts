import path from 'path';
import migrate from 'node-pg-migrate';
import pg from 'pg';
import config from '~config';
import Logger from '~lib/logger';
import App from '~app';

async function main() {
    const logger = Logger.init(config.LOG_LEVEL);

    logger.info('Initializing postgres client');

    const pgPool = new pg.Pool({
        port: config.DB_PORT,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        host: config.DB_HOST,
        database: config.DB_NAME,
    });

    const client = await pgPool.connect();

    logger.info('Initialized postgres client, running migrations');

    await migrate({
        dbClient: client,
        dir: path.resolve(__dirname, './migrations'),
        direction: 'up',
        count: 1000,
        migrationsTable: 'pgmigrations',
        schema: 'public',
        verbose: false,
        logger,
    });

    client.release();

    logger.info('Migrations complete, starting server.');

    const app = App(pgPool);

    app.use(Logger.requestLogger);
    app.listen(config.APP_PORT, () => {
        logger.info(`Server listening on port ${config.APP_PORT}`);
    });
}

main().catch(e => {
    console.log(e);
    process.exit(1);
});
