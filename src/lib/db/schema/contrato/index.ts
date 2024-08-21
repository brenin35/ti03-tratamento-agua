import { relations, sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { clienteTable } from '../cliente';
import { representateTable } from '../representantes';
import { servicoTable } from '../servico';

export const contratoTable = sqliteTable('contrato', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	date_emission: text('date_emission').default(sql`(CURRENT_TIMESTAMP)`),
	date_expire: text('date_expire').notNull(),
	cliente_id: integer('cliente_id').references(() => clienteTable.id)
});

export const contratoRelations = relations(contratoTable, ({ one, many }) => ({
	cliente: one(clienteTable, {
		fields: [contratoTable.cliente_id],
		references: [clienteTable.id]
	}),
	representate: one(representateTable),
	servico: one(servicoTable)
}));

export type SelectContrato = typeof contratoTable.$inferSelect;
export type InsertContrato = typeof contratoTable.$inferInsert;


