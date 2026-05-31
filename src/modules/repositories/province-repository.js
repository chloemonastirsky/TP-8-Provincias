import DBConfig from "../config/db-config.js";
import pg from "pg";
const { Client } = pg;

export default class ProvinceRepository {
    getAllAsync = async () => {
        const client = new Client(DBConfig);

        try {
            await client.connect();
            const sql = "SELECT * FROM provincias";
            const result = await client.query(sql);
            return result.rows;
        } catch (error) {
            console.error(error);
            throw new Error("Error al obtener provincias de la base de datos.");
        } finally {
            await client.end();
        }
    };

    getByIdAsync = async (id) => {
        const client = new Client(DBConfig);

        try {
            await client.connect();
            const sql = "SELECT * FROM provincias WHERE id = $1";
            const values = [id];
            const result = await client.query(sql, values);
            return result.rows[0] || null;
        } catch (error) {
            console.error(error);
            throw new Error("Error al obtener la provincia por ID.");
        } finally {
            await client.end();
        }
    };

    createAsync = async (entity) => {
        const client = new Client(DBConfig);

        try {
            await client.connect();
            const sql = "INSERT INTO provincias (id, nombre, nombrecompleto, latitud, longitud, displayorder) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
            const values = [
                entity.id,
                entity.nombre,
                entity.nombrecompleto,
                entity.latitud,
                entity.longitud,
                entity.displayorder,
            ];
            const result = await client.query(sql, values);
            return result.rows[0];
        } catch (error) {
            console.error(error);
            throw new Error("Error al crear la provincia en la base de datos.");
        } finally {
            await client.end();
        }
    };

    updateAsync = async (id, entity) => {
        const client = new Client(DBConfig);

        try {
            await client.connect();
            const sql = "UPDATE provincias SET nombre = $1, nombrecompleto = $2, latitud = $3, longitud = $4, displayorder = $5 WHERE id = $6";
            const values = [
                entity.nombre,
                entity.nombrecompleto,
                entity.latitud,
                entity.longitud,
                entity.displayorder,
                id,
            ];
            const result = await client.query(sql, values);
            return result.rowCount > 0;
        } catch (error) {
            console.error(error);
            throw new Error("Error al actualizar la provincia en la base de datos.");
        } finally {
            await client.end();
        }
    };

    deleteByIdAsync = async (id) => {
        const client = new Client(DBConfig);

        try {
            await client.connect();
            const sql = "DELETE FROM provincias WHERE id = $1";
            const values = [id];
            const result = await client.query(sql, values);
            return result.rowCount > 0;
        } catch (error) {
            console.error(error);
            throw new Error("Error al eliminar la provincia en la base de datos.");
        } finally {
            await client.end();
        }
    };
}
