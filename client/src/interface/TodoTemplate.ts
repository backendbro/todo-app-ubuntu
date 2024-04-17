interface TodoTemplate {
    ul:HTMLUListElement,
    render(todoData: any):void,
    clear():void 
}

export default class TodoTemplateHtml implements TodoTemplate {
    static instance:TodoTemplateHtml = new TodoTemplateHtml ()

    ul:HTMLUListElement    
    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement 
    }

    clear(): void {
        this.ul.innerHTML = " "
    }

    render(todoData:any): void {
        this.clear()
        todoData.forEach((todo: { id: string; newitem: string; }) => {
        
            const li = document.createElement("li")
            li.className = "item"

            const label = document.createElement("label")
            label.htmlFor = todo.id 
            label.textContent = "- " + todo.newitem 

            li.append(label)

            this.ul.append(li)
        });
    }

}