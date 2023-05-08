import { generateMany } from "../utils/generate-many.util";
import { v1, v3, v4, v5 } from "uuid";
import { ValueUUID } from "../types/objectValueType";
import { generateManyEnums } from "./enum.generator";

/**
 * @author: CHIKIRIAY
 * @created: 5/7/23
 * @Time: 8:38 PM
 */
export type UUIDVersion = 1 | 3 | 4 | 5;

export const generateUUID = (version: UUIDVersion): string => {
	switch (version) {
		case 1:
			return v1();
		case 3:
			return v3("https://www.w3.org/", v3.URL);
		case 4:
			return v4();
		case 5:
			return v5("https://www.w3.org/", v5.URL);
	}
};

export const generateManyUUID = (count: number, { version, uniqueItems }: Omit<ValueUUID, "type">): string[] => {
	// Only (uniqueItems) unique UUIDs
	if (uniqueItems < count) {
		const uniqueUUIDs = generateMany<string>(uniqueItems, () => generateUUID(version));
		generateManyEnums<string>(count - uniqueItems, uniqueUUIDs);
	}

	// All UUIDs unique
	return generateMany<string>(count, () => generateUUID(version));
};