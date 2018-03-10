const setupCheckboxes = (area, ingredients) => {
    let container = document.createElement("div");
    container.classList.add("products__checkboxes_wrapper");
    ingredients.map((el) => {
        let label = document.createElement("label");
        label.innerHTML = el;
        label.classList.add("products__checkbox_label");

        let input = document.createElement("input");
        input.classList.add("products__checkbox");
        input.setAttribute("type", "checkbox");

        label.appendChild(input);
        container.appendChild(label);
    });
    area.appendChild(container);
};

export {setupCheckboxes};