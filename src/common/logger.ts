/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 12:29 PM
 */
import { createLogger, format } from "winston";
import { Console } from "winston/lib/winston/transports";

const logFormat = format.combine(
	format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
	format.errors({ stack: true }),
	format.json({ bigint: true }),
	format.prettyPrint({ depth: 4 }),
	format.splat(),
	format.colorize({
		all: true,
		colors: {
			emerg: "magenta",
			alert: "red",
			crit: "red",
			error: "red",
			warning: "yellow",
			notice: "cyan",
			info: "green",
			debug: "blue",
		},
	}),
	format.printf((info) => {
		const { timestamp, level, message, ...meta } = info;
		const ts = timestamp.slice(0, 19).replace("T", " ");

		return `[${ts}] ${level}: ${message} ${
			Object.keys(meta).length ? JSON.stringify(meta) : ""
		}`;
	}),
);
/**
 * Consider that as the following rank order for the levels:
 *
 * ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < OFF
 */
export const logger = createLogger({
	levels: {
		emerg: 0,
		alert: 1,
		crit: 2,
		error: 3,
		warning: 4,
		notice: 5,
		info: 6,
		debug: 7,
	},
	format: logFormat,
	transports: [
		new Console({
			format: logFormat,
		}),
	],
});

/**
 * For Tests: level - colour
 */
// logger.emerg("emerg");
// logger.alert("alert");
// logger.crit("crit");
// logger.error("error");
// logger.warning("warning");
// logger.notice("notice");
// logger.info("info");
// logger.debug("debug");
