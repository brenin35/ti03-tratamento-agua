import { relations, sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { representanteTable } from '../representante';
import { contratoTable } from '../contrato';

export const clienteTable = sqliteTable('cliente', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	cnpj: text('cnpj').notNull(),
	representante_id: integer('representante_id').references(() => representanteTable.id)
});

export const clienteRelations = relations(clienteTable, ({ one }) => ({
	representante: one(representanteTable, {
		fields: [clienteTable.id],
		references: [representanteTable.id]
	}),
	contrato: one(contratoTable, {
		fields: [clienteTable.id],
		references: [contratoTable.cliente_id]
	})
}));

export type SelectClietne = typeof clienteTable.$inferSelect;
export type InsertCliente = typeof clienteTable.$inferInsert;
