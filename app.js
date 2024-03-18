import { TodoList } from './components/TodoList.js';
import { fetchJSON } from './api.js';
import { createElement } from "./dom.js";

try {
    //const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const todosInStorage = localStorage.getItem('todos')?.toString()
    console.log("STORAGE :::::: ");
    console.log(todosInStorage);
    let todos = []
    if (todosInStorage) {
        console.log("AIAIIAIAIAIAIAIAIAI");
        todos = JSON.parse(todosInStorage)
    }
    
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))
    console.log(todos);
} catch (e) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'
    })
    alertElement.innerText = 'Impossible de charger les élements'
    document.body.prepend(alertElement)
    console.error(e);
}
