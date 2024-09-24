import { db } from '$lib/db';
import { clienteTable } from '$lib/db/schema/cliente';
import type { InsertCliente, SelectCliente } from '$lib/db/schema/cliente';
import { eq } from 'drizzle-orm';

async function insertCliente(data: InsertCliente) {
	return db.insert(clienteTable).values(data);
}
async function selectClienteById(id: number) {
	return db.select().from(clienteTable).where(eq(clienteTable.id, id));
}

async function selectAllClientes() {
	return db.select().from(clienteTable);
}

async function updateCliente(id: number, data: Partial<SelectCliente>) {
	return db.update(clienteTable).set(data).where(eq(clienteTable.id, id));
}

async function deleteCliente(id: number) {
	return db.delete(clienteTable).where(eq(clienteTable.id, id));
}

export const clienteController = {
	insertCliente,
	selectClienteById,
	selectAllClientes,
	updateCliente,
	deleteCliente
};
