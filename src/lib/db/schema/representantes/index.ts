import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const representantes = sqliteTable('users', {
	id: integer('id').notNull().primaryKey({ autoIncrement: true }),
	name: text('name').notNull()
});

export type SelectRepresentantes = typeof representantes.$inferSelect;
export type InsertRepresentantes = typeof representantes.$inferInsert;
