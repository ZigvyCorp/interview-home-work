export const config = {
	PRODUCTION: '' || process.env.PRODUCTION,
	DEVELOPMENT: '' || process.env.DEVELOPMENT,
	API_URL: 'http://localhost:5000',
	ENV: process.env.NODE_ENV
}

export const regex = {
	email: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
	number: /^[0-9]+$/,
	numberAndWord: /^[a-zA-Z 0-9_.+-]+$/,
	numbersWithCommas: /^\d+(\,\d+)*$/g
}
export const defaultPagination = {
	current: 1,
	pageSize: 10,
	total: 0
}
export const defaultPaginationSmall = {
	current: 1,
	pageSize: 5,
	total: 0
}
