import { db } from '$lib/db';
import { representanteTable } from '$lib/db/schema/representante';
import type { InsertRepresentante, SelectRepresentante } from '$lib/db/schema/representante';
import { eq } from 'drizzle-orm';

async function insertRepresentante(data: InsertRepresentante) {
	return db.insert(representanteTable).values(data);
}

async function selectRepresentanteById(id: number) {
	return db.select().from(representanteTable).where(eq(representanteTable.id, id));
}

async function selectAllRepresentantes() {
	return db.select().from(representanteTable);
}

async function updateRepresentante(id: number, data: Partial<SelectRepresentante>) {
	return db.update(representanteTable).set(data).where(eq(representanteTable.id, id));
}

async function deleteRepresentante(id: number) {
	return db.delete(representanteTable).where(eq(representanteTable.id, id));
}

export const representanteController = {
	insertRepresentante,
	selectRepresentanteById,
	selectAllRepresentantes,
	updateRepresentante,
	deleteRepresentante
};
