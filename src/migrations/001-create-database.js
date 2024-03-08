const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js")

async function createDatabase(){
    try{
        const connection = await mysql.createConnection({
            host: databaseConfig.host,
            user: databaseConfig.user,
            password: databaseConfig.password,
        });
    
        await connection.query(
            `CREATE DATABASE IF NOT EXISTS ${databaseConfig.database}`
        );
    
        await connection.end();
        console.log("Databse created!");
    }catch(error){
        console.log(`Erros creating database: ${error}`);
    }
}
createDatabase();
    
    