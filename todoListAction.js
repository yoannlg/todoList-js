const input = document.querySelector('input[name="newTodo')
let totoID = 1
//ADD TODO
export const addTodo = (label) =>{
    const newTodo = document.createElement('li')
    newTodo.classList.add("todo", "m-1", "list-group-item", "d-flex", "align-items-center")
    newTodo.innerHTML=
        `
        <input class="form-check-input" type="checkbox" id="todo-${totoID}">
        <label class="ms-2 form-check-label" for="todo${totoID}">
            ${label}
        </label>
        <label class="ms-auto btn btn-danger btn-sm">
        <i class="bi-trash">
        </i>
        </label>
        `
    input.value = ''
    totoID++
    return newTodo
}

//CHECKED
export const isChecked = () => {
    const checkbox = document.querySelectorAll('li>input')
    checkbox.forEach(input => {
        input.addEventListener('change', (e) => {
            let curentLi = e.currentTarget.parentNode;
            let isChecked = e.currentTarget.checked;
            return isChecked ? curentLi.classList.add('checked') : curentLi.classList.remove('checked')
        })
    })
}
    
//REMOVE TODO
export const removeTodo = () => {
    let onTrashClick = (event)=> {
        event.currentTarget.parentNode.parentNode.remove();
    }
    
    document.querySelectorAll('i.bi-trash').forEach(button => {
        button.addEventListener('click', onTrashClick)
    })
    return
}
