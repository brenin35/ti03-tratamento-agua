import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const gerente = sqliteTable('users', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	name: text('name').notNull()
});

export type SelectGerente = typeof gerente.$inferSelect;
export type InsertGerente = typeof gerente.$inferInsert;
