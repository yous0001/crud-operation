let products=[];
let productName=document.getElementById("productName");
let productCategory=document.getElementById("productCategory");
let productPrice=document.getElementById("productPrice");
let productDescrition=document.getElementById("productDescrition");

function createProduct(){
    let product={
        prodName:productName.value,
        prodCategory:productCategory.value,
        prodPrice:productPrice.value,
        prodDescrition:productDescrition.value
    }
    products.push(product)
}