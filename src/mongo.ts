/**
 * @author: CHIKIRIAY
 * @created: 5/7/23
 * @Time: 8:44 PM
 */
import { BulkWriteResult, Collection, MongoClient } from "mongodb";
import { Envs } from "@Envs";

export const insertMany = async <T>(
	collectionName: string,
	object: T[],
): Promise<BulkWriteResult> => {
	const client = await MongoClient.connect(Envs.MONGODB_CONNECTION_URL);
	const db = client.db(Envs.MONGODB_DATABASE_NAME);
	const collection: Collection<T> = db.collection(collectionName);

	const bulk = collection.initializeUnorderedBulkOp();

	object.forEach((person) => {
		bulk.insert(person);
	});

	const result = await bulk.execute();

	await client.close();

	return result;
};