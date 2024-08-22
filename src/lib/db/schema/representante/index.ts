import { relations, sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { gerenteTable } from '../gerente';

export const representanteTable = sqliteTable('representante', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	gerente_id: integer('gerente_id').references(() => gerenteTable.id)
});

export const representanteRelations = relations(representanteTable, ({ one, many }) => ({
	cliente: many(representanteTable),
	contratoTable: many(representanteTable),
	gerente: one(gerenteTable, {
		fields: [representanteTable.gerente_id],
		references: [gerenteTable.id],
	}),
}));

export type SelectRepresentantes = typeof representanteTable.$inferSelect;
export type InsertRepresentantes = typeof representanteTable.$inferInsert;
