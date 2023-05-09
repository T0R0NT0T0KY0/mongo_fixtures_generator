/**
 * @author: CHIKIRIAY
 * @created: 5/7/23
 * @Time: 8:44 PM
 */
import { env } from "process";
import { config } from "dotenv";

config();

export const Envs = {
	MONGODB_CONNECTION_URL: env.MONGODB_CONNECTION_URL,
	MONGODB_DATABASE_NAME: env.MONGODB_DATABASE_NAME,
	TIMEOUT: +env.TIMEOUT || 5000,

	OBJECTS_BASE_PATH: env.OBJECTS_BASE_PATH ?? "src/objects/",
	OBJECTS_FILE_EXTENSION: env.OBJECTS_FILE_EXTENSION ?? ".json",
	SPLIT_MAX_COUNT: +env.SPLIT_MAX_COUNT || 10000,
};