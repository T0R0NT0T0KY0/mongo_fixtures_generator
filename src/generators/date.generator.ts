/**
 * @author: CHIKIRIAY
 * @created: 5/7/23
 * @Time: 9:01 PM
 */
import { generateNumber, RoundingStrategy } from "./number.generator";
import { generateMany } from "../utils/generate-many.util";
import { ValueDate } from "../types/generate-object.type";

export const generateDate = ({ min, max }: Omit<ValueDate, "type">): Date => {
	return new Date(generateNumber({
		min: +min, max: +max, rounding: RoundingStrategy.ROUND,
	}));
};

export const generateManyDates = (count: number, params: Omit<ValueDate, "type">): Date[] => {
	return generateMany<Date>(count, () => generateDate(params));
};