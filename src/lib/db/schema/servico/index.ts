import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const servicoTable = sqliteTable('servico', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
    description: text('description').notNull(),
});

export type SelectServico = typeof servicoTable.$inferSelect;
export type InsertServico = typeof servicoTable.$inferInsert;
