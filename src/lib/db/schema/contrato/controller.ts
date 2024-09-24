import { db } from '$lib/db';
import { contratoTable } from '$lib/db/schema/contrato';
import type { InsertContrato, SelectContrato } from '$lib/db/schema/contrato';
import { eq } from 'drizzle-orm';

async function insertContrato(data: InsertContrato) {
	return db.insert(contratoTable).values(data);
}

async function selectContratoById(id: number) {
	return db.select().from(contratoTable).where(eq(contratoTable.id, id));
}

async function selectAllContratos() {
	return db.select().from(contratoTable);
}

async function updateContrato(id: number, data: Partial<SelectContrato>) {
	return db.update(contratoTable).set(data).where(eq(contratoTable.id, id));
}

async function deleteContrato(id: number) {
	return db.delete(contratoTable).where(eq(contratoTable.id, id));
}
export const contratoController = {
    insertContrato,
    selectContratoById,
    selectAllContratos,
    updateContrato,
    deleteContrato
};
