import "../style/about.less"
import "../style/carousel.less"
import "../style/common.less"
import "../style/footer.less"
import "../style/header.less"
import "../style/products.less"

import {setupSlider} from "./setupSlider";
import {setupCheckboxes} from "./setupCheckboxes";
import ingredients from "../data/ingredients.js";

setupSlider();

const checkboxArea = document.querySelector(".products__checkboxes");

setupCheckboxes(checkboxArea, ingredients);

alert("Hello! I am an alert box!!");
