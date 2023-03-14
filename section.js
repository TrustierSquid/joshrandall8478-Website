


document.addEventListener('click', (element)=>{
    const isDropDownBtn = element.target.matches("[data-dropdown-button]")
    if (!isDropDownBtn && element.target.closest('[data-dropdown]') != null){
        return
    }
    
    let currentDropdown;
    if (isDropDownBtn){
        currentDropdown = element.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown => {
        if(dropdown == currentDropdown) return
        dropdown.classList.remove('active')
    }))
})

