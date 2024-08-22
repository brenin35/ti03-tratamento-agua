import { relations, sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { contratoTable } from '../contrato';

export const servicoTable = sqliteTable('servico', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	description: text('description').notNull()
});

export const servicoRelations = relations(servicoTable, ({ one, many }) => ({
	contrato: many(servicoTable)
}));

export const servicoToContratoTable = sqliteTable('servico_to_contrato', {
	servico_id: integer('servico_id')
		.notNull()
		.references(() => servicoTable.id),
	contrato_id: integer('contrato_id')
		.notNull()
		.references(() => contratoTable.id)
});

export const servicoToContratoRelations = relations(servicoToContratoTable, ({ one }) => ({
	servico: one(servicoTable, {
		fields: [servicoToContratoTable.servico_id],
		references: [servicoTable.id]
	}),
	contrato: one(contratoTable, {
		fields: [servicoToContratoTable.contrato_id],
		references: [contratoTable.id]
	})
}));

export type SelectServico = typeof servicoTable.$inferSelect;
export type InsertServico = typeof servicoTable.$inferInsert;
