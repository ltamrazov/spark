import pg from 'pg';
import express from 'express';
import postgraphile from 'postgraphile';

export default function NewApp(db: pg.Pool, schema: string = 'public'): express.Express {
    const app = express();

    const graphile = postgraphile(
        db,
        schema,
        {
            graphiql: true,
            enhanceGraphiql: true,
            showErrorStack: true,
            allowExplain: true,
            extendedErrors: ['hint', 'detail', 'errcode'],
            enableQueryBatching: true,
        },
    );

    app.use(graphile);

    return app;
}
