import { db } from '$lib/db';
import { gerenteTable } from '$lib/db/schema/gerente';
import type { InsertGerente, SelectGerente } from '$lib/db/schema/gerente';
import { eq } from 'drizzle-orm';

async function insertGerente(data: InsertGerente) {
	return db.insert(gerenteTable).values(data);
}

async function selectGerenteById(id: number) {
	return db.select().from(gerenteTable).where(eq(gerenteTable.id, id));
}

async function selectAllGerentes() {
	return db.select().from(gerenteTable);
}

async function updateGerente(id: number, data: Partial<SelectGerente>) {
	return db.update(gerenteTable).set(data).where(eq(gerenteTable.id, id));
}

async function deleteGerente(id: number) {
	return db.delete(gerenteTable).where(eq(gerenteTable.id, id));
}

export const gerenteController = {
	insertGerente,
	selectGerenteById,
	selectAllGerentes,
	updateGerente,
	deleteGerente
};
