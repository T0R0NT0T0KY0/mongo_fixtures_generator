/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 1:18 AM
 */
import { glob } from "glob";
import { join } from "path";
import { readFile } from "node:fs/promises";
import { GenerateObjectsType } from "../types/objectValueType";
import { logger } from "../common/logger";

export const getFileNames = async (): Promise<string[]> => {
	try {
		const files = await glob("src/objects/*.json", { nodir: true });

		logger.info(`Object Patterns: ${files.map(file => `"${file}"`).join(", ")}`);

		return files;
	} catch (err) {
		logger.error(err);
		return [];
	}
};

export const parseObject = async (filePath: string): Promise<GenerateObjectsType> => {
	try {
		const fileText = await readFile(join(process.cwd(), filePath), { encoding: "utf8" });

		return JSON.parse(fileText);
	} catch (err) {
		logger.error(`Error In File ${filePath}.
		Message: ${err.message}`);
	}
};