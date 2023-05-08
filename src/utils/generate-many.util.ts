/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 2:07 AM
 */

export const generateMany = <T>(count: number, func: () => T): T[] => {
	const values: T[] = [];
	for (let i = 0; i < count; i++) {
		values.push(func());
	}
	return values;
};