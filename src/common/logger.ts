/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 12:29 PM
 */
import pino from "pino";

export const logger = pino({
	transport: {
		target: "pino-pretty",
	},
});
