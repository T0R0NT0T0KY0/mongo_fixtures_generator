import { ValueNumber } from "../types/generate-object.type";
import { generateMany } from "../utils/generate-many.util";

/**
 * @author: CHIKIRIAY
 * @created: 5/7/23
 * @Time: 9:05 PM
 */
export enum RoundingStrategy {
	ROUND = "round",
	FLOOR = "floor",
	CEIL = "ceil",
}


export const generateNumber = ({ min, max, rounding }: Omit<ValueNumber, "type">): number => {
	const range = max - min;
	const randomNumber = Math.random() * range + min;

	switch (rounding) {
		case RoundingStrategy.FLOOR:
			return Math.floor(randomNumber);
		case RoundingStrategy.CEIL:
			return Math.ceil(randomNumber);
		case RoundingStrategy.ROUND:
			return Math.round(randomNumber);
		default:
			return randomNumber;
	}
};

export const generateManyNumbers = (count: number, params: ValueNumber) => {
	return generateMany(count, () => generateNumber(params));
};