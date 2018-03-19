let productArray = [];

database.map(item => {
    let newProduct = new product(item['productCategory'], item['imageSrcValue'], item['productCaption'], item['productPrice'], item['productComposition']);
    productArray.push(newProduct);
    newProduct.render();
});

console.log(productArray);

// sandbox

// const arrayOfObjects = [{name:"Bilbo", secondname:"Baggins"}, {name:"Gandalf", secondname:"Gray"}, {name:"Nazgul", secondname:"Dark"}];
//
// arrayOfObjects.map(item => console.log(item['name'], item['secondname']));