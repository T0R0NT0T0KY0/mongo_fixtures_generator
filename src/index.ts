/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 12:35 AM
 */
import { getFileNames, parseObject } from "./utils/object-reader.util";
import { timeout } from "./utils/timeout.util";
import { generateObjectsUtil } from "./utils/generate-objects.util";
import { Envs } from "./config/envs";

export const run = async () => {
	const fileNames = await getFileNames();

	for (const fileName of fileNames) {
		const { count, object } = await parseObject(fileName);

		generateObjectsUtil(count, object);

		await timeout(Envs.TIMEOUT);
	}
};