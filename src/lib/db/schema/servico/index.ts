import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const servico = sqliteTable('users', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
    description: text('description').notNull(),
});

export type SelectServico = typeof servico.$inferSelect;
export type InsertServico = typeof servico.$inferInsert;
