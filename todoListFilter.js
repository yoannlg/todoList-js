//FOCUS ON FILTER
export let focusOnCurrentFilter = (e) => {
    const currentFilter = e.currentTarget
    const isActiveFilter = currentFilter.classList.contains('active')
    console.log(currentFilter.classList.contains('active')); 
    document.querySelectorAll('div.btn-group > button').forEach(button => {
        button.classList.remove('active')
    });
    isActiveFilter ? '' : currentFilter.classList.add('active')
}
