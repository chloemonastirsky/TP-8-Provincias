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
    createAsync = async (entity) => { /* hacerlo */ }
    updateAsync = async (entity) => { /* hacerlo */ }
    deleteByIdAsync = async (id) => { /* hacerlo */ }
}