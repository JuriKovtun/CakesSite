// class Product {
//
//     constructor(productCategory, imageSrcValue, productCaption, productPrice, productComposition) {
//
//         this.productCategory = productCategory;
//         this.imageSrcValue = imageSrcValue;
//         this.productCaption = productCaption;
//         this.productPrice = productPrice;
//         this.productComposition = productComposition;
//
//     }
//
//     render(entryPoint) {
//         let product = document.createElement("div");
//         product.classList.add("product__item");
//         product.setAttribute("productCategory", this.productCategory);
//
//         let productImage = document.createElement("img");
//         productImage.classList.add("product__item-image");
//         productImage.setAttribute("src", this.imageSrcValue);
//         productImage.setAttribute("alt", "image error");
//
//         let productCaption = document.createElement("h4");
//         productCaption.classList.add("product__item-caption");
//         productCaption.innerHTML = `${this.productCaption}`;
//         product.appendChild(productCaption);
//
//         let productPrice = document.createElement("span");
//         productPrice.classList.add("product__item-price");
//         productPrice.innerHTML = `Цена: ${this.productPrice}`;
//
//         let productIngredients = document.createElement("span");
//         productIngredients.classList.add("product__item-ingredients");
//         productIngredients.innerHTML = `Ингридиенты: ${this.productComposition}`;
//
//         product.appendChild(productImage);
//         product.appendChild(productCaption);
//         product.appendChild(productPrice);
//         product.appendChild(productIngredients);
//         entryPoint.appendChild(product);
//         return this;
//     }
// }
// export default Product;

class Product {

    constructor (productCategory, imageSrcValue, productCaption, productPrice, productWeight, productComposition) {

        this.productCategory = productCategory;
        this.imageSrcValue = imageSrcValue;
        this.productCaption = productCaption;
        this.productPrice = productPrice;
        this.productWeight = productWeight;
        this.productComposition = productComposition;

    }

    render (location) {
        let product = document.createElement("div");
        product.classList.add("product");
        product.setAttribute("category", this.productCategory);

        let productBuy = document.createElement("div");
        productBuy.classList.add("product__buy");

        let productBuyContainer = document.createElement("div");
        productBuyContainer.classList.add("product__buy-button_container");

        let productBuyButton = document.createElement("button");
        productBuyButton.classList.add("product__buy-button");
        productBuyButton.setAttribute("onclick", "alert('Well done!')");
        productBuyButton.innerHTML = "КУПИТЬ";

        let productImage = document.createElement("img");
        productImage.classList.add("product__image");
        productImage.setAttribute("src", this.imageSrcValue);
        productImage.setAttribute("alt", "image error");

        let productCaption = document.createElement("h4");
        productCaption.classList.add("product__caption");
        productCaption.classList.add("product-text");
        productCaption.innerHTML = `${this.productCaption}`;

        let productPrice = document.createElement("div");
        productPrice.classList.add("product__price");
        productPrice.classList.add("product-text");

        let priceTag = document.createElement("span");
        priceTag.classList.add("product__price-tag");
        priceTag.innerHTML = `${this.productPrice}`;

        let priceCurrency = document.createElement("span");
        priceCurrency.classList.add("product__price-currency");
        priceCurrency.innerHTML = "грн";

        let weight = document.createElement("span");
        weight.classList.add("product__weight");
        weight.innerHTML = `${this.productWeight}`;

        let productComposition = document.createElement("div");
        productComposition.classList.add("product__composition");
        productComposition.classList.add("product-text");
        productComposition.innerHTML = "Состав: ";

        let productCompositionList = document.createElement("span");
        productCompositionList.classList.add("product__composition-list");
        productCompositionList.innerHTML = `${this.productComposition}`;

        let extraIngredients = document.createElement("div");
        extraIngredients.classList.add("product__ingredients");
        extraIngredients.classList.add("product-text");
        extraIngredients.setAttribute("onclick", "setupDropdown(this)");
        extraIngredients.innerHTML = "Дополнительные ингредиенты:";

        let fa = document.createElement("i");
        fa.classList.add("fa");
        fa.classList.add("fa-caret-down");

        let extraIngredientsList = document.createElement("p");
        extraIngredientsList.classList.add("product__ingredients-list");
        extraIngredientsList.classList.add("product-text");
        extraIngredientsList.innerHTML = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit.";


        product.appendChild(productBuy);
        productBuy.appendChild(productBuyContainer);
        productBuyContainer.appendChild(productBuyButton);
        product.appendChild(productImage);
        product.appendChild(productCaption);
        product.appendChild(productPrice);
        productPrice.appendChild(priceTag);
        productPrice.appendChild(priceCurrency);
        productPrice.appendChild(weight);
        product.appendChild(productComposition);
        productComposition.appendChild(productCompositionList);
        product.appendChild(extraIngredients);
        extraIngredients.appendChild(fa);
        product.appendChild(extraIngredientsList);

        location.appendChild(product);
        return this;
    }
}
export default Product;