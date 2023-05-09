/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 12:35 AM
 */
import { getFileNames, parseObject } from "./utils/object-reader.util";
import { timeout } from "./utils/timeout.util";
import { generateObjectsUtil } from "./utils/generate-objects.util";
import { Envs } from "./config/envs";
import { getClient, insertMany } from "./mongo";
import { logger } from "./common/logger";
import { GenerateObjectType } from "./types/generate-object.type";
import { createProgressBar } from "./common/progress-bar";

export const generateManyFixturesByOnePattern = async (count: number, splitMaxCount: number, fileName: string, object: Record<string, GenerateObjectType>): Promise<void> => {
	const progressBar = createProgressBar();
	const client = await getClient();
	progressBar.start(count, 0);

	try {
		for (let splitCount = count; 0 < splitCount; splitCount -= splitMaxCount) {
			const splitCountCurrent = Math.min(splitCount, splitMaxCount);

			const objects = generateObjectsUtil(splitCountCurrent, object);

			const bulkWriteResult = await insertMany(client, fileName, objects);

			if (bulkWriteResult.hasWriteErrors()) {
				throw new Error(bulkWriteResult.getWriteErrors().map(err => err.errmsg).join());
			}

			progressBar.increment(splitCountCurrent);
		}
	} catch (e) {
		logger.error(`Generate Error: ${e.message}`);
	} finally {
		progressBar.stop();
		await client.close();
	}
};

export const run = async () => {
	const basePath = Envs.OBJECTS_BASE_PATH;
	const fileExtension = Envs.OBJECTS_FILE_EXTENSION;
	const splitMaxCount = Envs.SPLIT_MAX_COUNT;

	const fileNames = await getFileNames(basePath, fileExtension);

	for (const fileName of fileNames) {

		const { count, object } = await parseObject(`${basePath}${fileName}${fileExtension}`);

		logger.info(`Now ${count} Objects Are Generated For The ${fileName} Collection.`);

		await generateManyFixturesByOnePattern(count, splitMaxCount, fileName, object);

		await timeout(Envs.TIMEOUT);
	}
};