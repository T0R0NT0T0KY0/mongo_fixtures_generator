/**
 * @author: CHIKIRIAY
 * @created: 5/8/23
 * @Time: 1:54 AM
 */

export const timeout = (delay: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
};