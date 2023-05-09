/**
 * @author: CHIKIRIAY
 * @created: 5/7/23
 * @Time: 8:44 PM
 */
import { BulkWriteOptions, BulkWriteResult, Collection, MongoClient } from "mongodb";
import { Envs } from "./config/envs";

export const getClient = (): Promise<MongoClient> => {
	return MongoClient.connect(Envs.MONGODB_CONNECTION_URL);
};

export const insertMany = async <T>(
	client: MongoClient,
	collectionName: string,
	object: T[],
	options?: BulkWriteOptions,
): Promise<BulkWriteResult> => {
	const db = client.db(Envs.MONGODB_DATABASE_NAME);
	const collection: Collection<T> = db.collection(collectionName);

	const bulk = collection.initializeUnorderedBulkOp();
	object.forEach((person) => {
		bulk.insert(person);
	});

	return await bulk.execute(options);
};