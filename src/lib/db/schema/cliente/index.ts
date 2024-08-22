import { relations, sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { representanteTable } from '../representantes';

export const clienteTable = sqliteTable('cliente', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	cnpj: text('cpnj').notNull(),
	representante_id: integer('representante_id').references(() => representanteTable.id)
});

export const clienteRelations = relations(clienteTable, ({ one }) => ({
	representante: one(representanteTable, {
		fields: [clienteTable.id],
		references: [representanteTable.id]
	})
}));

export type SelectClietne = typeof clienteTable.$inferSelect;
export type InsertCliente = typeof clienteTable.$inferInsert;
