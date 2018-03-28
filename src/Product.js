class Product {
    constructor(category, imageSrcValue, caption, price, weight, composition, ingredients, buyHanlder) {
        this.category = category;
        this.imageSrcValue = imageSrcValue;
        this.caption = caption;
        this.price = price;
        this.weight = weight;
        this.composition = composition;
        this.ingredients = ingredients;
        this.buyHandler = buyHanlder;

    }

    renderPrice() {
        let price = document.createElement("div");
        price.classList.add("product__price", "product-text");

        let priceTag = document.createElement("span");
        priceTag.classList.add("product__price-tag");
        priceTag.innerHTML = `${this.price}`;

        let priceCurrency = document.createElement("span");
        priceCurrency.classList.add("product__price-currency");
        priceCurrency.innerHTML = "грн";

        let weight = document.createElement("span");
        weight.classList.add("product__weight");
        weight.innerHTML = `${this.weight}`;

        price.appendChild(priceTag);
        price.appendChild(priceCurrency);
        price.appendChild(weight);

        return price;

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


        extraLabel.appendChild(extraCheckbox);
        extraWrapper.appendChild(extraLabel);
        extraWrapper.appendChild(extraPrice);
        extraPrice.appendChild(extraCurrency);
        return extraWrapper;

    }

    renderBuyButton() {
        let buySection = document.createElement("div");
        buySection.classList.add("product__buy-section");

        let buyButton = document.createElement("button");
        buyButton.classList.add("product__buy-button");
        buyButton.innerHTML = "КУПИТЬ";
        buyButton.addEventListener("click", (ev) => this.buyHandler(this), false);


        buySection.appendChild(buyButton);
        return buySection;

    }

    renderImage() {
        let image = document.createElement("img");
        image.classList.add("product__image");
        image.setAttribute("src", this.imageSrcValue);
        image.setAttribute("alt", "image error");
        return image
    }


    renderTitle() {
        let caption = document.createElement("h4");
        caption.classList.add("product__title", "product-text");
        caption.innerHTML = `${this.caption}`;
        return caption;
    }

    renderComposition() {
        let composition = document.createElement("div");
        composition.classList.add("product__composition", "product-text");
        composition.innerHTML = "Состав: ";

        let compositionList = document.createElement("span");
        compositionList.classList.add("product__composition-list");
        compositionList.innerHTML = `${this.composition}`;
        composition.appendChild(compositionList);
        return composition;

    }

    renderExtraIngredientsTitle() {
        let extraIngredients = document.createElement("div");
        extraIngredients.classList.add("ingredients", "product-text");
        extraIngredients.innerHTML = "Дополнительные ингредиенты:";
        return extraIngredients;
    }

    renderExtraIngredientsList() {
        let extraIngredientsList = document.createElement("div");
        extraIngredientsList.classList.add("ingredients-list", "product-text");
        this.ingredients.map((el) => extraIngredientsList.appendChild(this.renderIngredients(el.ingredient, el.price)));
        return extraIngredientsList;
    }

    renderCartItem(count) {
        let product = document.createElement("div");
        product.classList.add("product__cart");
        product.innerHTML = `${this.caption}: ${count}`;

        return product;
    }


    render(location) {
        let product = document.createElement("div");
        product.classList.add("product");
        product.setAttribute("category", this.category);


        product.appendChild(this.renderImage());
        product.appendChild(this.renderTitle());

        const price = this.renderPrice();
        product.appendChild(price);

        product.appendChild(this.renderComposition());
        product.appendChild(this.renderExtraIngredientsTitle());
        product.appendChild(this.renderExtraIngredientsList());


        const buyButton = this.renderBuyButton();
        product.appendChild(buyButton);

        location.appendChild(product);
        return this;
    }
}

export default Product;