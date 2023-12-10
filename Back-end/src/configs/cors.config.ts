import * as cors from 'cors'

const options: cors.CorsOptions = {
    origin: "*",
    methods: ['GET', 'POST', 'PUT' ,'DELETE'],
    allowedHeaders: '*',
};
const corsConfig = cors.default(options)

export default corsConfig