declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production";
            DB_USER: string;
            DB_PASS: string;
            DB_HOST: string;
            DB_PORT: number;
            DB_NAME: string;
        }
    }
}

export { };