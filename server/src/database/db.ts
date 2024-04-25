require('dotenv').config(); 

const pgp = require("pg-promise")()

const isProduction = process.env.NODE_ENV === "production" 
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = pgp({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString
});

const getTodoDb = async (): Promise<{id:string, newitem:string}[]>  => {
    try {
        const todos =  await pool.query("SELECT * from todo"); 
        return todos;  
    } catch (error) {
        return error.message 
    }
}


const addTodoDb = async (newItem): Promise<{id:string, newitem:string}[]> => {
    try {
        const todo = await pool.query(`INSERT INTO todo (newItem) VALUES ($1) RETURNING id, newItem`, [newItem])
        return todo
    } catch (error) {
        return error.message 
    }
}   

const clearTodoDb = async (req,res): Promise <void> => {
    try {
        await pool.query(`DELETE FROM todo`) 
    } catch (error) {
        return error.message 
    }
}

module.exports = {
    getTodoDb, 
    addTodoDb, 
    clearTodoDb
}

