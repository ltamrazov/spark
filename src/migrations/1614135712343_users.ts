import { MigrationBuilder } from 'node-pg-migrate';

export async function up(pgm: MigrationBuilder): Promise<void> {
    pgm.sql(`CREATE TABLE IF NOT EXISTS users (
        id    UUID,
        email varchar
    )`);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    pgm.sql(`DROP TABLE IF EXISTS users`);
}
