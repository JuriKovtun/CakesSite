class Product {
    constructor(category, imageSrcValue, caption, price, weight, composition, ingredients) {
        this.category = category;
        this.imageSrcValue = imageSrcValue;
        this.caption = caption;
        this.price = price;
        this.weight = weight;
        this.composition = composition;
        this.ingredients = ingredients;

    }

    renderBuyButton() {
        let buySection = document.createElement("div");
        buySection.classList.add("product__buy-section");


        let buyButton = document.createElement("button");
        buyButton.classList.add("product__buy-button");
        buyButton.setAttribute("onclick", "alert('Well done!')");
        buyButton.innerHTML = "КУПИТЬ";

        buySection.appendChild(buyButton);
        return buySection;

    }

    render(location) {
        let product = document.createElement("div");
        product.classList.add("product");
        product.setAttribute("category", this.category);

        let productImage = document.createElement("img");
        productImage.classList.add("product__image");
        productImage.setAttribute("src", this.imageSrcValue);
        productImage.setAttribute("alt", "image error");

        let productCaption = document.createElement("h4");
        productCaption.classList.add("product__caption", "product-text");
        productCaption.innerHTML = `${this.caption}`;

        let productPrice = document.createElement("div");
        productPrice.classList.add("product__price", "product-text");

        let priceTag = document.createElement("span");
        priceTag.classList.add("product__price-tag");
        priceTag.innerHTML = `${this.price}`;

        let priceCurrency = document.createElement("span");
        priceCurrency.classList.add("product__price-currency");
        priceCurrency.innerHTML = "грн";

        let weight = document.createElement("span");
        weight.classList.add("product__weight");
        weight.innerHTML = `${this.weight}`;

        let productComposition = document.createElement("div");
        productComposition.classList.add("product__composition", "product-text");
        productComposition.innerHTML = "Состав: ";

        let productCompositionList = document.createElement("span");
        productCompositionList.classList.add("product__composition-list");
        productCompositionList.innerHTML = `${this.composition}`;

        let extraIngredients = document.createElement("div");
        extraIngredients.classList.add("ingredients", "product-text");
        extraIngredients.setAttribute("onclick", "setupDropdown(this)");
        extraIngredients.innerHTML = "Дополнительные ингредиенты:";

        let extraIngredientsList = document.createElement("div");
        extraIngredientsList.classList.add("ingredients-list", "product-text");


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

        const buyButton = this.renderBuyButton();
        product.appendChild(buyButton);

        this.ingredients.map((el) => extraIngredientsList.appendChild(this.renderIngredients(el.ingredient, el.price)));
        location.appendChild(product);
        return this;
    }

    renderIngredients(ingredient, price) {
        let extraWrapper = document.createElement("div");
        extraWrapper.classList.add("ingredients__checkbox-container");

        let extraCheckbox = document.createElement("input");
        extraCheckbox.classList.add("ingredients-checkbox");
        extraCheckbox.setAttribute("type", "checkbox");

        let extraLabel = document.createElement("label");
        extraLabel.classList.add("ingredients-label");
        extraLabel.innerHTML = ingredient;

        let extraPrice = document.createElement("span");
        extraPrice.classList.add("ingredients-price");
        extraPrice.innerHTML = price;

        let extraCurrency = document.createElement("span");
        extraCurrency.classList.add("ingredients-currency");
        extraCurrency.innerHTML = " грн";


        extraWrapper.appendChild(extraCheckbox);
        extraWrapper.appendChild(extraLabel);
        extraWrapper.appendChild(extraPrice);
        extraPrice.appendChild(extraCurrency);
        return extraWrapper;

    }
}

export default Product;