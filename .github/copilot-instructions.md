# Copilot instructions for this repository

- This is a plain Node.js + Express API for province CRUD over PostgreSQL. The project uses ES modules (`"type": "module"` in `package.json`).
- App bootstrap is in `index.js`: it configures CORS, JSON parsing, mounts the router at `/api/province`, and serves Swagger UI at `/api-docs`.
- Keep the current architectural split: controller -> service -> repository -> PostgreSQL. Do not introduce a new framework/ORM layer unless the task clearly requires it.
- The resource-specific router is `src/controllers/province-controller.js`. Most endpoint logic belongs there, with service calls kept thin and database work pushed down to the repository.
- `src/modules/services/province-service.js` is the business-layer façade. Preserve its simple pattern: `getAllAsync`, `getByIdAsync`, `createAsync`, `updateAsync`, `deleteByIdAsync` delegating to a repository instance.
- `src/modules/repositories/province-repository.js` is the database boundary. It uses `pg` directly, opens a fresh `Client` per method, and runs parameterized SQL against the `public.provincias` table.
- `src/entities/province.js` is a lightweight DTO; field names must match the DB schema exactly: `id`, `nombre`, `nombrecompleto`, `latitud`, `longitud`, `displayorder`.
- `src/config/db-config.js` reads PostgreSQL settings from environment variables (`DB_HOST`, `DB_DATABASE`, `DB_USER`, `DB_PASSWORD`, `DB_PORT`) and falls back to local defaults (`localhost`, `TP8`, `postgres`, `root`, `5432`).
- The schema source of truth is `database/TP8-DB.sql`. If you change the table structure or seed data, keep the SQL dump in sync.
- Swagger is generated from JSDoc annotations in the route file. `swagger.js` reads `#swagger.*` comments and writes `swagger-output.json`; run `npm run swagger` after adding or changing endpoints.
- For runtime use, `npm start` runs `node swagger.js && node index.js`; `npm run dev` does the same with `nodemon`; `npm run swagger` regenerates the OpenAPI file only.
- The API runs on port `4000` and the hardcoded Swagger host is `localhost:5000` in `swagger.js`.
- Preserve the existing Spanish naming and error messages (`Provincia no encontrada`, `Error interno al obtener provincias.`) when editing API responses.
- When adding new functionality, keep it consistent with the single-resource pattern: one router plus the service/repository pair, not a broad multi-resource structure.
- There is no centralized validation helper yet (`src/helpers/validaciones-helpers.js` is empty). Prefer small, local validation in the route/service if needed rather than inventing a new abstraction.
- Existing code is intentionally lightweight and database-centric. Prefer direct SQL and simple Express handlers over introducing DI, custom ORMs, or extra layers.
- Look at the `provincias` data in `database/TP8-DB.sql` for naming conventions, especially the use of `nombre` vs `nombrecompleto` and the ordering field `displayorder`.
- If you need to modify the API contract, update both the route JSDoc and the generated `swagger-output.json` (or regenerate it) so docs stay aligned with code.
