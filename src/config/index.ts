const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    LOG_LEVEL,
}: {
    DB_HOST?: string,
    DB_PORT?: string,
    DB_USER?: string,
    DB_PASSWORD?: string,
    DB_NAME?: string,
    LOG_LEVEL?: string
} = process.env;

const DB_PORT: number = parseInt(process.env.DB_PORT, 10);
const APP_PORT: number = parseInt(process.env.APP_PORT, 10);

if (!DB_HOST) {
    throw Error('Missing DB_HOST env var');
}

if (!DB_USER) {
    throw Error('Missing DB_HOST env var');
}

if (!DB_PORT) {
    throw Error('Missing DB_USER env var');
}

if (!APP_PORT) {
    throw Error('Missing DB_USER env var');
}

if (!DB_PASSWORD) {
    throw Error('Missing DB_PASSWORD');
}

if (!DB_NAME) {
    throw Error('Missing DB_NAME');
}

export default {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT,
    LOG_LEVEL,
    APP_PORT,
};
