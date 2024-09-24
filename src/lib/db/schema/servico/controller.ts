import { db } from '$lib/db';
import { servicoTable } from '$lib/db/schema/servico';
import type { InsertServico, SelectServico } from '$lib/db/schema/servico';
import { eq } from 'drizzle-orm';

async function insertServico(data: InsertServico) {
	return db.insert(servicoTable).values(data);
}

async function selectServicoById(id: number) {
	return db.select().from(servicoTable).where(eq(servicoTable.id, id));
}

async function selectAllServicos() {
	return db.select().from(servicoTable);
}
async function updateServico(id: number, data: Partial<SelectServico>) {
	return db.update(servicoTable).set(data).where(eq(servicoTable.id, id));
}

async function deleteServico(id: number) {
	return db.delete(servicoTable).where(eq(servicoTable.id, id));
}

export const servicoController = {
	insertServico,
	selectServicoById,
	selectAllServicos,
	updateServico,
	deleteServico
};
