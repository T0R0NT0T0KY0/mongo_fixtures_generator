/**
 * @author: CHIKIRIAY
 * @created: 5/7/23
 * @Time: 9:01 PM
 */
import { generateNumber } from "./number.generator";

export const generateTimestamp = ({ minDate, maxDate }: TimestampGeneratorType): Date => {
	return new Date(generateNumber({ min: +minDate, max: +maxDate, round: true }));
};

export type TimestampGeneratorType = {
	maxDate: Date | number;

	minDate: Date | number;
}