import "../style/about.less"
import "../style/carousel.less"
import "../style/common.less"
import "../style/footer.less"
import "../style/header.less"
import "../style/product.less"

import {setupSlider} from "./setupSlider";
import {renderCheckboxes, filterCheckboxes} from "./setupCheckboxes";
import setupDropdown from "./setupDropdown";
import data from "../data/ingredients.js";
import sliderImages from "../data/sliderImages.js";
import Product from "./Product";


const database = data;
const categories = [...new Set(data.map(item => item.productCategory))];


setupSlider(sliderImages);

const checkboxArea = document.querySelector(".products__checkboxes");
const checkBoxes = renderCheckboxes(checkboxArea, categories);


//setupDropdown(dropdownContent);

const productsLocation = document.querySelector(".products__main");
const products = database.map(item => new Product(item['productCategory'], item['imageSrcValue'], item['productCaption'], item['productPrice'], item['productWeight'], item['productComposition']).render(productsLocation));


checkboxArea.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("products__checkbox")) filterCheckboxes(productsLocation, checkBoxes, products)
});
