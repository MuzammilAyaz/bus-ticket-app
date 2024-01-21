import dotenv from "dotenv"
import joi from 'joi';
dotenv.config();
const envVarsSchema = joi
    .object()
    .keys({
        NODE_ENV: joi
            .string().valid("production", "development", "test")
            .default("development")
            .required(),
        VERSION: joi.string().required(),
        PORT: joi.number().default("5500").required(),
    })
    .unknown();
const { value: envVars } = envVarsSchema.validate(process.env)

export default {
    env: envVars.NODE_ENV,
    version: envVars.VERSION,
    port: envVars.PORT
}

