/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 12:58 AM
 */
import { RoundingStrategy, UUIDVersion } from "../generators";

export type GenerateObjectsType = {
	/**
	 * How many entities create
	 */
	count: number;

	/**
	 * Entity description
	 */
	object: Record<string, GenerateObjectType>
}

export type GenerateObjectType = ValueUUID | ValueEnum | ValueDate | ValueObject | ValueString | ValueNumber;


export type ValueUUID = {
	type: "uuid",

	"version": UUIDVersion,

	/**
	 * Default: all unique
	 */
	"uniqueItems"?: number
}

export type ValueEnum<T = unknown> = {
	type: "enum",

	"enum": T[],
}

export type ValueDate = {
	type: "date",

	"min": number | Date,

	"max": number | Date
}

export type ValueObject = {
	type: "object",

	"object": Record<string, GenerateObjectType> | Record<string, GenerateObjectType>[]
}

export type ValueString = {
	type: "string",

	minLength: number,

	maxLength: number
}

export type ValueNumber = {
	type: "number",

	min: number,

	max: number,

	rounding?: RoundingStrategy
}