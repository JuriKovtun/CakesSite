class Product {
    constructor(productCategory, imageSrcValue, productCaption, productPrice, productWeight, productComposition, ingredients) {
        this.productCategory = productCategory;
        this.imageSrcValue = imageSrcValue;
        this.productCaption = productCaption;
        this.productPrice = productPrice;
        this.productWeight = productWeight;
        this.productComposition = productComposition;
        this.ingredients = ingredients;

    }

    render(location) {
        let product = document.createElement("div");
        product.classList.add("product");
        product.setAttribute("category", this.productCategory);

        let productBuy = document.createElement("div");
        productBuy.classList.add("product__buy");

        let productBuyContainer = document.createElement("div");
        productBuyContainer.classList.add("product__buy-button_wrapper");

        let productBuyButton = document.createElement("button");
        productBuyButton.classList.add("product__buy-button");
        productBuyButton.setAttribute("onclick", "alert('Well done!')");
        productBuyButton.innerHTML = "КУПИТЬ";

        let productImage = document.createElement("img");
        productImage.classList.add("product__image");
        productImage.setAttribute("src", this.imageSrcValue);
        productImage.setAttribute("alt", "image error");

        let productCaption = document.createElement("h4");
        productCaption.classList.add("product__caption", "product-text");
        productCaption.innerHTML = `${this.productCaption}`;

        let productPrice = document.createElement("div");
        productPrice.classList.add("product__price", "product-text");

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
        productComposition.classList.add("product__composition", "product-text");
        productComposition.innerHTML = "Состав: ";

        let productCompositionList = document.createElement("span");
        productCompositionList.classList.add("product__composition-list");
        productCompositionList.innerHTML = `${this.productComposition}`;

        let extraIngredients = document.createElement("div");
        extraIngredients.classList.add("product__extraIngredients", "product-text");
        extraIngredients.setAttribute("onclick", "setupDropdown(this)");
        extraIngredients.innerHTML = "Дополнительные ингредиенты:";

        let extraIngredientsList = document.createElement("div");
        extraIngredientsList.classList.add("product__extraIngredients-list", "product-text");


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
        product.appendChild(extraIngredientsList);

        this.ingredients.map((el) => extraIngredientsList.appendChild(this.renderIngredients(el.ingredient, el.price)));
        location.appendChild(product);
        return this;
    }

    renderIngredients(ingredient, price) {
        let extraWrapper = document.createElement("div");
        extraWrapper.classList.add("product__extraIngredients__checkbox-wrapper");

        let extraCheckbox = document.createElement("input");
        extraCheckbox.classList.add("product__extraIngredients-checkbox");
        extraCheckbox.setAttribute("type", "checkbox");

        let extraLabel = document.createElement("label");
        extraLabel.classList.add("product__extraIngredients-label");
        extraLabel.innerHTML = ingredient;

        let extraPrice = document.createElement("span");
        extraPrice.classList.add("product__extraIngredients-price");
        extraPrice.innerHTML = price;

        extraWrapper.appendChild(extraCheckbox);
        extraWrapper.appendChild(extraLabel);
        extraWrapper.appendChild(extraPrice);
        return extraWrapper;

    }
}

export default Product;