import axios from "axios"

const baseUrl:string =
  process.env.NODE_ENV === "production"
    ? "/api/v1/todo"
    : "http://localhost:4000/api/v1/todo";

const getTodos = async () :Promise<any> => {
    try {
        const response = await axios.get(baseUrl)
        return response.data.message 
    } catch (error:any) {
        return error.message
    }
}

const addTodo = async (newItemEntry: string) : Promise <void> => {
    try {
        await axios.post(baseUrl, {newItem:newItemEntry})
    } catch (error:any) {
        return error.message
    }
}

const deleteTodo = async () : Promise <void> => { 
    try {
        await axios.delete(baseUrl) 
    } catch (error:any) {
        return error.message 
    }
}

export { getTodos, addTodo, deleteTodo }

