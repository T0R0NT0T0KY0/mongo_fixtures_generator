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


export const generateNumber = (
	minValue: number,
	maxValue: number,
	roundingStrategy?: RoundingStrategy,
): number => {
	const range = maxValue - minValue;
	const randomNumber = Math.random() * range + minValue;

	switch (roundingStrategy) {
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