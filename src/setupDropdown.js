function setupDropdown (dropdownContent) {
    dropdownContent.classList.toggle("active");
    dropdownContent.nextElementSibling.classList.toggle("visible");
}

export {setupDropdown};