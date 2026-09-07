import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ProvinceRouter from "./src/controllers/province-controller.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)

// Leer el archivo de especificación de Swagger
const swaggerFile = JSON.parse(fs.readFileSync(path.join(__dirname, "swagger-output.json"), "utf8"));

// Agrego los Middlewares
app.use(cors());        // Middleware de CORS.
app.use(express.json()) // Middleware para parsear y comprender JSON.


//
// Endpoints (todos los Routers)
//
app.use("/api/province", ProvinceRouter);

//
// Inicio el Server y lo pongo a escuchar.
//

// Configurar Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})