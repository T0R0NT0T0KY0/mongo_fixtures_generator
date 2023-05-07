/**
 * @author: CHIKIRIAY
 * @created: 5/7/23
 * @Time: 9:07 PM
 */
import { generateNumber, RoundingStrategy } from "./number.generator";

export const enumGenerator = <T>(enumeration: T[]): T[keyof T] => {
	const enumValues = Object.values(enumeration);
	const randomIndex = generateNumber(0, enumValues.length - 1, RoundingStrategy.ROUND);
	return enumValues[randomIndex] as T[keyof T];
};