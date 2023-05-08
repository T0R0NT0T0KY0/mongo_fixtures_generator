/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 2:49 AM
 */
import { ObjectValueType } from "../types/objectValueType";
import {
	generateManyDates,
	generateManyEnums,
	generateManyNumbers,
	generateManyObjects,
	generateManyStrings,
	generateManyUUID,
} from "../generators";


export const generateManyValues = (count: number, value: ObjectValueType) => {
	switch (value.type) {
		case "uuid":
			return generateManyUUID(count, value);
		case "date":
			return generateManyDates(count, value);
		case "enum":
			return generateManyEnums(count, value.enum);
		case "number":
			return generateManyNumbers(count, value);
		case "string":
			return generateManyStrings(count, value);
		case "object":
			return generateManyObjects(count, value);
	}
};