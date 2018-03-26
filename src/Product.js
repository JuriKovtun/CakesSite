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
        buyButton.setAttribute("onclick", "alert('Well done!')");
        buyButton.innerHTML = "КУПИТЬ";

        buySection.appendChild(buyButton);
        return buySection;

    }

    render(location) {
        let product = document.createElement("div");
        product.classList.add("product");
        product.setAttribute("category", this.category);

        let image = document.createElement("img");
        image.classList.add("product__image");
        image.setAttribute("src", this.imageSrcValue);
        image.setAttribute("alt", "image error");

        let caption = document.createElement("h4");
        caption.classList.add("product__caption", "product-text");
        caption.innerHTML = `${this.caption}`;

        let composition = document.createElement("div");
        composition.classList.add("product__composition", "product-text");
        composition.innerHTML = "Состав: ";

        let compositionList = document.createElement("span");
        compositionList.classList.add("product__composition-list");
        compositionList.innerHTML = `${this.composition}`;

        let extraIngredients = document.createElement("div");
        extraIngredients.classList.add("ingredients", "product-text");
        extraIngredients.innerHTML = "Дополнительные ингредиенты:";

        let extraIngredientsList = document.createElement("div");
        extraIngredientsList.classList.add("ingredients-list", "product-text");


        product.appendChild(image);
        product.appendChild(caption);

        const price = this.renderPrice();
        product.appendChild(price);

        product.appendChild(composition);
        composition.appendChild(compositionList);
        product.appendChild(extraIngredients);
        product.appendChild(extraIngredientsList);

        this.ingredients.map((el) => extraIngredientsList.appendChild(this.renderIngredients(el.ingredient, el.price)));
        location.appendChild(product);

        const buyButton = this.renderBuyButton();
        product.appendChild(buyButton);

        return this;
    }
}

export default Product;