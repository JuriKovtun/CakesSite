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


const ingredients = data[0];
const database = data[1];

setupSlider();

const checkboxArea = document.querySelector(".products__checkboxes");

setupCheckboxes(checkboxArea, ingredients);


let productArray = [];

database.map(item => {
    let newProduct = new Product(item['productCategory'], item['imageSrcValue'], item['productCaption'], item['productPrice'], item['productComposition']);
    productArray.push(newProduct);
    newProduct.render();
});

