import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const cliente = sqliteTable('users', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	cnpj: text('cpnj').notNull()
});

export type SelectClietne = typeof cliente.$inferSelect;
export type InsertCliente = typeof cliente.$inferInsert;
