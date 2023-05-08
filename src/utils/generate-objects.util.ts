/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 1:58 AM
 */
import { generateManyValues } from "./generate-values";
import { ObjectValueType } from "../types/objectValueType";


export const generateObjectsUtil = (count: number, object: Record<string, ObjectValueType>): Record<string, unknown>[] => {
	const objects: Record<string, unknown>[] = Array.from({ length: count }, () => ({}));

	const entries = Object.entries(object);
	for (const [key, value] of entries) {
		const valuesByType = generateManyValues(count, value);

		objects.map((obj) => obj[key] = valuesByType.pop());
	}

	return objects;
};