// import { db } from '$lib/db';
// import { relatorioTable } from '$lib/db/schema/relatorio';
// import type { InsertRelatorio, SelectRelatorioById, SelectAllRelatorios, UpdateRelatorio, DeleteRelatorio } from '$lib/db/schema/relatorio';

// // Inserir um relatório
// async function insertRelatorio(data: InsertRelatorio) {
//     return db.insert(relatorioTable).values(data).run();
// }

// // Selecionar um relatório por ID
// async function selectRelatorioById(id: number) {
//     return db.select().from(relatorioTable).where((relatorioTable.id as any).eq(id)).get();
// }

// // Selecionar todos os relatórios
// async function selectAllRelatorios() {
//     return db.select().from(relatorioTable).all();
// }

// // Atualizar um relatório por ID
// async function updateRelatorio(id: number, data: Partial<InsertRelatorio>) {
//     return db.update(relatorioTable).set(data).where((relatorioTable.id as any).eq(id)).run();
// }

// // Deletar um relatório por ID
// async function deleteRelatorio(id: number) {
//     return db.delete(relatorioTable).where((relatorioTable.id as any).eq(id)).run();
// }

// export const relatorioController = {
//     insertRelatorio,
//     selectRelatorioById,
//     selectAllRelatorios,
//     updateRelatorio,
//     deleteRelatorio
// };
