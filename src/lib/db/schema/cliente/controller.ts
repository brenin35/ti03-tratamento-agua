import { db } from '$lib/db';
import { clienteTable, type InsertCliente } from '$lib/db/schema';

function insertCliente(data: InsertCliente) {
	return db.insert(clienteTable).values(data);
}

function selectAllClientes() {
	return db.select().from(clienteTable);
}

export const clienteController = {
    insertCliente,
    selectAllClientes
}