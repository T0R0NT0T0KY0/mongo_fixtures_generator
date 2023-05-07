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
};