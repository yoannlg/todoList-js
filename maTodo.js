import * as todoAction from './todoListAction.js'
import { focusOnCurrentFilter } from "./todoListFilter.js";
const list = document.querySelector('ul')
const form = document.querySelector('form')
let isLi = document.querySelector('li.todo')

//Initialisation des listener sur une liste déjà présente
if (isLi) {
    todoAction.isChecked()
    todoAction.removeTodo()
}

//SUBMIT EVENT
form.addEventListener('submit',(e)=>{
    const data = new FormData(form)
    let dataContent = data.get('newTodo');
    list.append(todoAction.addTodo(dataContent))
    e.preventDefault()
    todoAction.isChecked()
    todoAction.removeTodo()
})
//FILTER
const buttons = document.querySelectorAll('div.btn-group > button')
    buttons.forEach(button => {
        button.addEventListener('click', focusOnCurrentFilter)
});


