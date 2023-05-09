/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 3:21 PM
 */

import { SingleBar } from "cli-progress";

export const createProgressBar = (): SingleBar => {
	// Создаем инстанс прогресс бара
	return new SingleBar({
		format: "Progress [{bar}] {percentage}% | ETA: {eta}s | val/tot: {value}/{total} | Elapsed: {duration_formatted}",
		barCompleteChar: "\u2588",
		barIncompleteChar: "\u2591",
		hideCursor: true,
		autopadding: true,
		forceRedraw: true,
	});
};