export const objectToQueryString = (object: any): string => {
	return '?' + new URLSearchParams(object).toString();
};