/**
 * @author: CHIKIRIAY
 * @created: 5/7/23
 * @Time: 9:07 PM
 */
import { generateNumber, RoundingStrategy } from "./number.generator";
import { generateMany } from "../utils/generate-many.util";

export const generateEnum = <T>(enums: T[]): T => {
	const randomIndex = generateNumber({ min: 0, max: enums.length - 1, rounding: RoundingStrategy.ROUND });
	return enums[randomIndex];
};

export const generateManyEnums = <T>(count: number, enums: T[]): T[] => {
	return generateMany<T>(count, () => generateEnum<T>(enums));
};