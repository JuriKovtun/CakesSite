class Product {

    constructor(productCategory, imageSrcValue, productCaption, productPrice, productComposition) {

        this.productCategory = productCategory;
        this.imageSrcValue = imageSrcValue;
        this.productCaption = productCaption;
        this.productPrice = productPrice;
        this.productComposition = productComposition;

    }

    render(entryPoint) {
        let product = document.createElement("div");
        product.classList.add("product__item");
        product.setAttribute("productCategory", this.productCategory);

        let productImage = document.createElement("img");
        productImage.classList.add("product__item-image");
        productImage.setAttribute("src", this.imageSrcValue);
        productImage.setAttribute("alt", "image error");

        let productCaption = document.createElement("h4");
        productCaption.classList.add("product__item-caption");
        productCaption.innerHTML = `${this.productCaption}`;
        product.appendChild(productCaption);

        let productPrice = document.createElement("span");
        productPrice.classList.add("product__item-price");
        productPrice.innerHTML = `Цена: ${this.productPrice}`;

        let productIngredients = document.createElement("span");
        productIngredients.classList.add("product__item-ingredients");
        productIngredients.innerHTML = `Ингридиенты: ${this.productComposition}`;

        product.appendChild(productImage);
        product.appendChild(productCaption);
        product.appendChild(productPrice);
        product.appendChild(productIngredients);
        entryPoint.appendChild(product);
        return this;

    }


}


export default Product;