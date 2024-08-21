import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const clienteTable = sqliteTable('cliente', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	cnpj: text('cpnj').notNull()
});

export type SelectClietne = typeof clienteTable.$inferSelect;
export type InsertCliente = typeof clienteTable.$inferInsert;
