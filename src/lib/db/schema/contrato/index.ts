import { relations, sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { clienteTable } from '../cliente';
import { representanteTable } from '../representante';
import { servicoTable } from '../servico';

export const contratoTable = sqliteTable('contrato', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	date_emission: text('date_emission').default(sql`(CURRENT_TIMESTAMP)`),
	date_expire: text('date_expire').notNull(),
	cliente_id: integer('cliente_id').references(() => clienteTable.id),
	representante_id: integer('representante_id').references(() => representanteTable.id),
	servico_id: integer('servico_id').references(() => servicoTable.id)
});

export const contratoRelations = relations(contratoTable, ({ one, many }) => ({
	cliente: one(clienteTable, {
		fields: [contratoTable.cliente_id],
		references: [clienteTable.id]
	}),
	representate: one(representanteTable, {
		fields: [contratoTable.representante_id],
		references: [representanteTable.id]
	}),
	servico: many(servicoTable)
}));

export type SelectContrato = typeof contratoTable.$inferSelect;
export type InsertContrato = typeof contratoTable.$inferInsert;
