import DBConfig from '../configs/dbConfig.js';
import pg from 'pg';
const { Client, Pool } = pg;

export default class ProvinceRepository {
    getAllAsync = async () => {
        let returnArray = null;
        const client = new Client(DBConfig);

        try {
            await client.connect();

            const sql = 'SELECT * FROM provincias';
            const result = await client.query(sql);

            await client.end();

            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }

        return returnArray;
    }

    getByIdAsync = async (id) => { 
        let returnEntity = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();

            const sql = 'SELECT * FROM provincias where id = $1';
            const values = [id];
            const result = await client.query(sql,values);
            if(result.rows.length>0){
                returnEntity=result.rows[0];
            }
        } catch (error) {
            console.log(error);
        }finally{
            await client.end();
        }
        return returnEntity;

     }
    createAsync = async (entity) => { 
        let entity = null;
        const client = new Client(DBConfig);

            await client.connect();

            const sql = 'INSERT INTO provincias (id, nombre, nombrecompleto, latitud, longitud, displayorder) VALUES ($1,$2,$3,$4,$5)';
            const values = [entity];
            const result = await client.query(sql,values);

            await client.end();
     }
    updateAsync = async (entity) => { 
        let entity = null;
        const client = new Client(DBConfig);

            await client.connect();

            const sql = 'UPDATE Provincias (id, nombre, nombrecompleto, latitud, longitud, displayorder) SET nombre = $1, nombrecompleto = $2 ,latitud = $3, longitud = $4, displayorder = $5 WHERE id = $6';
            const values = [
            entity.nombre,
            entity.nombrecompleto,
            entity.latitud,
            entity.longitud,
            entity.displayorder,
            entity.id
        ];
            const result = await client.query(sql,values);

            await client.end();
            return result.rowCount;
         }
    deleteByIdAsync = async (id) => { /* hacerlo */ }
}