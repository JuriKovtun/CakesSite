import "../style/about.less"
import "../style/carousel.less"
import "../style/common.less"
import "../style/footer.less"
import "../style/header.less"
import "../style/products.less"

import {setupSlider} from "./setupSlider";
import {setupCheckboxes} from "./setupCheckboxes";
import data from "../data/ingredients.js";
import Product from "./Product";


const database = data;
const ingredients = [...new Set(data.map(item => item.productCategory))];


setupSlider();

const checkboxArea = document.querySelector(".products__checkboxes");

setupCheckboxes(checkboxArea, ingredients);

const productsLocation = document.querySelector(".products__main");
const products = database.map(item => new Product(item['productCategory'], item['imageSrcValue'], item['productCaption'], item['productPrice'], item['productWeight'], item['productComposition']).render(productsLocation));

function classToggle (dropdownContent) {
    dropdownContent.classList.toggle("active");
    dropdownContent.nextElementSibling.classList.toggle("visible");
}





