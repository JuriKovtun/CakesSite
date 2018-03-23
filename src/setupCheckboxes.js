const renderCheckboxes = (area, categories) => {
    let container = document.createElement("div");
    container.classList.add("products__checkboxes_wrapper");
    const checkboxes = categories.map((category) => {
        let label = document.createElement("label");
        label.innerHTML = category;
        label.classList.add("products__checkbox_label");

        let input = document.createElement("input");
        input.classList.add("products__checkbox");
        input.setAttribute("type", "checkbox");

        label.appendChild(input);
        container.appendChild(label);
        return label;
    });
    area.appendChild(container);
    return checkboxes;
};

const filterCheckboxes = (productsLocation, checkBoxes, products) => {

    productsLocation.innerHTML = "";
    let checkedBoxes = checkBoxes.filter((el) => el.lastChild.checked);

    let dataToRender = [];
    for (let i = 0; i < products.length; ++i) {
        for (let j = 0; j < checkedBoxes.length; ++j) {
            if (products[i].productCategory === checkedBoxes[j].innerText) {
                dataToRender.push(products[i]);
                break;
            }
        }
    }

    dataToRender.map((el) => el.render(productsLocation));
};

export {renderCheckboxes, filterCheckboxes};


