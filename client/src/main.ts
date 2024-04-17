import './style.css'

import TodoTemplateHtml from './interface/TodoTemplate'
import {getTodos, addTodo, deleteTodo} from '../api' 


const initApp =  async (): Promise <void> => {
    const template = TodoTemplateHtml.instance 

    const submitForm = document.getElementById("itemEntryForm") as HTMLFormElement
    const clearBtn = document.getElementById("clearItemsButton") as HTMLButtonElement 
    
    submitForm.addEventListener('submit', async (event:SubmitEvent):Promise <void> => {
        event.preventDefault() 

        const input = document.getElementById("newItem") as HTMLInputElement 
        const newItemEntry = input.value.trim()
        if(!newItemEntry.length) return 

        await addTodo(newItemEntry)

        const getAllTodos = await getTodos()
        
        template.render(getAllTodos)
        input.value = " "
    })


    clearBtn.addEventListener('click', async (): Promise<void> => {
        await deleteTodo()
        template.clear()
    })
    
   
    const getAllTodos = await getTodos()
    template.render(getAllTodos)
}

document.addEventListener('DOMContentLoaded', initApp)
