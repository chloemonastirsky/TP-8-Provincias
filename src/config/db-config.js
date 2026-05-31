import dotenv from "dotenv";

dotenv.config();

const config = {
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_DATABASE || "TP8",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "root",
    port: Number(process.env.DB_PORT || 5432),
};

export default config;