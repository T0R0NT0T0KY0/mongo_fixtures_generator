/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 12:58 AM
 */
import { UUIDVersion } from "../generators/uuid.generator";

export type GenerateObjectsType = {
	/**
	 * How many entities create
	 */
	count: number;

	/**
	 * Entity description
	 */
	object: Record<string, ObjectValueType>
}

export type ObjectValueType = ValueUUID | ValueEnum | ValueDate | ValueObject | ValueString;


type ValueUUID = {
	type: "uuid",
	"version": UUIDVersion,

	/**
	 * Default: all unique
	 */
	"uniqueItems"?: number
}

type ValueEnum<T = unknown> = {
	type: "enum",
	"enum": T[],
}

type ValueDate = {
	type: "date",
	"min": number,
	"max": number
}

type ValueObject = {
	type: "object",

	/**
	 * Generate Different Objects
	 */
	"different"?: boolean,

	"object": ObjectValueType | ObjectValueType[]
}

type ValueString = {
	type: "string",
	minLength: number,
	maxLength: number
}