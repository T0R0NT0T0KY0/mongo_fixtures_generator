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

export const getFileNames = async (basePath: string, fileExtension: string): Promise<string[]> => {
	try {
		const fileNamesWithPath = await glob(`${basePath}*${fileExtension}`, { nodir: true });

		const fileNames = fileNamesWithPath
			.map((fileNameWithPath) =>
				fileNameWithPath
					.match(new RegExp(`${basePath}([\\w-]+)${fileExtension}`))[1]);

		logger.info(`Object Patterns: ${fileNames.map(file => `"${file}"`).join(", ")}`);

		return fileNames;
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