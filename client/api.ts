import axios from "axios"

const baseUrl:string = "http://localhost:4000/api/v1/todo"

const getTodos = async () :Promise<any> => {
    const response = await axios.get(baseUrl)
    return response.data.message 
}

const addTodo = async (newItemEntry: string) : Promise <void> => {
    await axios.post(baseUrl, {newItem:newItemEntry})
}

const deleteTodo = async () : Promise <void> => { 
    await axios.delete(baseUrl) 
}

export { getTodos, addTodo, deleteTodo }

