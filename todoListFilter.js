//FOCUS ON FILTER
const activeFilter = (currentFilter, filters) => {
    const isActiveFilter = currentFilter.classList.contains('active')
    console.log(currentFilter.classList.contains('active')); 
    filters.forEach(button => {
        button.classList.remove('active')
    });
    isActiveFilter ? '' : currentFilter.classList.add('active')
}
const todoFilter = (filters, e) => {
    filters.forEach(button => {
        button.classList.che
    });
    console.log(Array.from(filters).filter((e) => {
        console.log(e);
        return e.classList.contains('active')
    }));
}

export let focusOnCurrentFilter = (e) => {
    const filters = document.querySelectorAll('div.btn-group > button')
    const currentFilter = e.currentTarget
    activeFilter(currentFilter, filters)
    todoFilter(filters ,e)
}
