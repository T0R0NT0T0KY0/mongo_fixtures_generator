/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 2:48 AM
 */
import { generateMany } from "../utils/generate-many.util";
import { ObjectValueType, ValueObject } from "../types/objectValueType";
import { generateEnum } from "./enum.generator";
import { generateObjectsUtil } from "../utils/generate-objects.util";


export const generateManyObjects = (count: number, params: Omit<ValueObject, "type">) => {
	if (Array.isArray(params.object)) {
		return generateMany(count, () => {
			const objectPattern = generateEnum<Record<string, ObjectValueType>>
			(params.object as Record<string, ObjectValueType>[]);
			return generateObjectsUtil(1, objectPattern);
		});
	}
	return generateMany(count, () => generateObjectsUtil(count, params.object as Record<string, ObjectValueType>));
};