let productArray = [];

database.map(item => {
    let newProduct = new product(item['productCategory'], item['imageSrcValue'], item['productCaption'], item['productPrice'], item['productComposition']);
    productArray.push(newProduct);
    newProduct.render();
});

console.log(productArray);