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
    reset()
    display()
}
function reset(){
    productName.value=""
    productCategory.value=""
    productPrice.value=""
    productDescrition.value=""
}

function display(){
    let cartona="";
    for(let i=0;i<products.length;i++){
        cartona+=`<tr>
                    <td>${i+1}</td>
                    <td>${products[i].prodName}</td>
                    <td>${products[i].prodCategory}</td>
                    <td>${products[i].prodPrice}</td>
                    <td>${products[i].prodDescrition}</td>
                    <td><button class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></td>
                    <td><button class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button></td>
                </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartona;
}