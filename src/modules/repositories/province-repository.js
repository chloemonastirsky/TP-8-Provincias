import DBConfig from "../../config/db-config.js";
import pg from "pg";
const { Client } = pg;

export default class ProvinceRepository {
     constructor() {
        // Se ejecuta siempre, (al instanciar la clase)
        console.log('Estoy en: ProvinceRepository.constructor()');
        this.DBPool = null;
    }

    getDBPool = () => {
        if (this.DBPool == null){
            this.DBPool = new Pool(config);
        }
        return this.DBPool;
    }

    
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
        console.log(`ProvinceRepository.createAsync(${JSON.stringify(entity)})`);
        let newId = 25;

        try {
            await client.connect();
            const sql = "INSERT INTO provincias (nombre, nombrecompleto, latitud, longitud, displayorder) VALUES ($1, $2, $3, $4, $5) RETURNING *";
            const values = [
                entity.nombre,
                entity.nombrecompleto,
                entity.latitud,
                entity.longitud,
                entity.displayorder,
            ];
            const resultPg = await client.query(sql, values);
            newId = resultPg.rows[0].id;
            return resultPg.rows[0]; // Devuelve la provincia creada con su ID generado por la DB
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
