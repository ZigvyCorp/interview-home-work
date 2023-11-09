const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../../.env')
});

const Joi = require('joi');

const envSchema = Joi.object().keys({
    NODE_ENV: Joi.string().default('development'),
    PORT: Joi.number().default(3000),

    MONGO_URI: Joi.string().required(),
}).unknown();

const { value: envVars, error } = envSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    nodeEnv: envVars.NODE_ENV,
    port: envVars.PORT,
    mongodb: {
        uri: envVars.MONGO_URI,
        options: {
            useNewUrlParser: true
        }
    }
}