import winston from 'winston';
import expressWinston from 'express-winston';

const newWinston = (level: string): winston.Logger => winston.createLogger({
    level,
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
    ],
});

export default class Logger {
    private static instance: winston.Logger;

    public static requestLogger;

    public static getInstance() {
        if (!this.instance) {
            this.instance = newWinston('info');
        }

        return this.instance;
    }

    public static init(level: string = 'info'): winston.Logger {
        this.instance = newWinston(level);
        this.requestLogger = expressWinston.errorLogger({
            transports: [
                new winston.transports.Console(),
            ],
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.json(),
            ),
        });
        return this.instance;
    }
}
