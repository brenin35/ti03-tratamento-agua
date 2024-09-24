import { relations } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { representanteTable } from '../representante';
import { contratoTable } from '../contrato';

export const clienteTable = sqliteTable('cliente', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	cnpj: integer('cnpj').notNull(),
	name: text('name').notNull(),
	representante_id: integer('representante_id').references(() => representanteTable.id),
	endereco: text('endereco')
});

export const clienteRelations = relations(clienteTable, ({ one }) => ({
	representante: one(representanteTable, {
		fields: [clienteTable.representante_id],
		references: [representanteTable.id]
	}),
	contrato: one(contratoTable, {
		fields: [clienteTable.id],
		references: [contratoTable.cliente_id]
	})
}));

export type SelectCliente = typeof clienteTable.$inferSelect;
export type InsertCliente = typeof clienteTable.$inferInsert;