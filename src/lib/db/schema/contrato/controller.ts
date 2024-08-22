import { db } from '$lib/db';
import { contratoTable, type InsertContrato } from '.';

function insertContrato(data: InsertContrato) {
	return db.insert(contratoTable).values(data);
}

export const contratoController = {
	insertContrato
};
