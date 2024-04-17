const db = require('../database/db')


const getTodo = async (req,res): Promise <void> => {
    try {
        const todos: {id:String, newitem:string}[] = await db.getTodoDb() 
        
        if (todos.length == 0){
            return res.status(404).json({success:false, message:"No todos found"})
        }

        res.status(200).json({success:true, message:todos})

    } catch (error:any) {
        return res.status(500).json({success:false, message:error.message})
    }
}



const addTodo = async (req,res)  => {
    try {
        const {newItem} = req.body
        const todo: {id:String, newitem:string}[] = await db.addTodoDb(newItem)
        
        if (!todo){
            return res.status(400).json({success:false, message:"Could not create todo"})
        }

       res.status(201).json({success:true, message:todo})
    } catch (error:any) {
        return res.status(500).json({success:false, message:error.message})
    }
}

const clearTodo = async (req,res) : Promise <void> => {
    try {
        await db.clearTodoDb()
        res.status(200).json({success:true, message:"Todos deleted"})
    } catch (error:any) {
        return res.status(500).json({success:false, message:error.message})
    }
}




module.exports = {
    getTodo, 
    addTodo,
    clearTodo 
}
