/**
 * @author: CHIKIRIAY
 * @created: 5/7/23
 * @Time: 9:01 PM
 */
import { generateNumber, RoundingStrategy } from "./number.generator";

export const generateTimestamp = ({ minDate, maxDate }: TimestampGeneratorType): Date => {
	return new Date(generateNumber(+minDate, +maxDate, RoundingStrategy.ROUND));
};

export type TimestampGeneratorType = {
	maxDate: Date | number;

	minDate: Date | number;
}