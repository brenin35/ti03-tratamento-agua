// import { relations } from 'drizzle-orm';
// import { servicoTable } from '../servico'; // Ajuste o caminho conforme necessário
// import { representanteTable } from '../representante';
// import { text, integer, sqliteTable, boolean } from 'drizzle-orm/sqlite-core';


// export const relatorioTable = sqliteTable('relatorio', {
//     id: integer('id').primaryKey({ autoIncrement: true }),
//     Status: text('Status').notNull(),
//     InclusaoServico: boolean('InclusaoServico').notNull(),
//     Observacoes: text('Observacoes'),
//     servico_ID: integer('servico_ID').references(() => servicoTable.id),
//     representante_ID: integer('representante_ID').references(() => representanteTable.id),
// });

// // Relações
// export const relatorioRelations = relations(relatorioTable, ({ one }) => ({
//     servico: one(servicoTable),
//     representante: one(representanteTable),
// }));

// export type InsertRelatorio = {
//     Status: string;
//     InclusaoServico: boolean;
//     Observacoes?: string;
//     servico_ID: number;
//     representante_ID: number;
// };

// export type SelectRelatorioById = {
//     id: number;
//     Status: string;
//     InclusaoServico: boolean;
//     Observacoes?: string;
//     servico_ID: number;
//     representante_ID: number;
// };
