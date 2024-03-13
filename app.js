import { fetchJSON } from './api.js';
import { createElement } from "./dom.js";

try {
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    console.log(todos);
} catch (e) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'
    })
    alertElement.innerText = 'Impossible de charger les élements'
    document.body.prepend(alertElement)
}
