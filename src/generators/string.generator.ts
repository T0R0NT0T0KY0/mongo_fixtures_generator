/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 2:34 AM
 */
import { ValueString } from "../types/generate-object.type";
import { generateMany } from "../utils/generate-many.util";

function generateString({ minLength, maxLength }: Omit<ValueString, "type">): string {
	const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
	const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
	const resultArray = new Array(length);

	for (let i = 0; i < length; i++) {
		resultArray[i] = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
	}

	return resultArray.join("");
}

export const generateManyStrings = (count: number, params: Omit<ValueString, "type">): string[] => {
	return generateMany(count, () => generateString(params));
};