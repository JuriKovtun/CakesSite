import "../style/about.less"
import "../style/carousel.less"
import "../style/categoryCheckbox.less"
import "../style/common.less"
import "../style/footer.less"
import "../style/header.less"
import "../style/product.less"
import "../style/products.less"
import "../style/ingredients.less"

import {setupSlider} from "./setupSlider";
import {renderCheckboxes, filterCheckboxes} from "./setupCheckboxes";
import data from "../data/ingredients.js";
import sliderImages from "../data/sliderImages.js";
import Product from "./Product";


const database = data;
const categories = [...new Set(data.map(item => item.category))];

setupSlider(sliderImages);


const checkboxArea = document.querySelector(".products__checkboxes");
const shoppingCartArea = document.body.querySelector(".products__cart");
const checkBoxes = renderCheckboxes(checkboxArea, categories);


const productsLocation = document.querySelector(".products__main");

let cart = new Map();
const addToCart = (item) => {
    if (cart.has(item)) cart.set(item, cart.get(item) + 1);
    else cart.set(item, 1);
    renderCart(cart, shoppingCartArea);
};

const renderCart = (cart, entry) => {
    entry.innerHTML = "";
    const items = cart.entries();
    Array.from(items).map((el) => entry.appendChild(el[0].renderCartItem(el[1])))
};


const products = database.map(item => new Product(item['category'], item['imageSrcValue'], item['caption'], item['price'], item['weight'], item['composition'], item['extraIngredients'], addToCart).render(productsLocation));


checkboxArea.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("products__checkbox")) filterCheckboxes(productsLocation, checkBoxes, products)
});


