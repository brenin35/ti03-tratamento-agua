import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const contrato = sqliteTable('users', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
    date_emission: text("date_emission").default(sql`(CURRENT_TIMESTAMP)`),
    date_expire: text("date_expire").default(sql`(CURRENT_TIMESTAMP)`),
});

export type SelectContrato = typeof contrato.$inferSelect;
export type InsertContrato = typeof contrato.$inferInsert;
