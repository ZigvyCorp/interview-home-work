import dbLoader from './connect.js';

const conn = await dbLoader();

export { conn };
