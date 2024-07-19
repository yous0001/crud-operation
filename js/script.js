let products=[];
let productName=document.getElementById("productName");
let productCategory=document.getElementById("productCategory");
let productPrice=document.getElementById("productPrice");
let productDescrition=document.getElementById("productDescrition");
let searchfield=document.getElementById("serachProduct");
let updateFlag=false;
let currentIndex;

function changebtn(){
    if(updateFlag==false){
        document.getElementById("main-btn").innerHTML="ADD Product"
        document.getElementById("main-btn").className="btn btn-primary"
    }
    else{
        document.getElementById("main-btn").innerHTML="update Product"
        document.getElementById("main-btn").className="btn btn-success"
    }
}
if(localStorage.getItem("products")===null){
    products=[];
}
else{
    products=JSON.parse(localStorage.getItem("products"));
    display();
}

function createProduct(){
    if(updateFlag==false){
        let product={
            prodName:productName.value,
            prodCategory:productCategory.value,
            prodPrice:productPrice.value,
            prodDescrition:productDescrition.value
        }
        products.push(product)
        localStorage.setItem("products",JSON.stringify(products))
        reset()
        display()
    }
    else{
        let product={
            prodName:productName.value,
            prodCategory:productCategory.value,
            prodPrice:productPrice.value,
            prodDescrition:productDescrition.value
        }
        products[currentIndex]=product
        localStorage.setItem("products",JSON.stringify(products))
        reset()
        display()
        updateFlag=false
        changebtn()
    }
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
                    <td><button onclick="updateProduct(${i})"  class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></td>
                    <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button></td>
                </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartona;
    document.getElementById("count").innerHTML=products.length;
}
function deleteProduct(i){
    products.splice(i,1)
    localStorage.setItem("products",JSON.stringify(products))
    display();
}

function updateProduct(i){

    productName.value=products[i].prodName
    productCategory.value=products[i].prodCategory
    productPrice.value=products[i].prodPrice
    productDescrition.value=products[i].prodDescrition
    updateFlag=true;
    changebtn()
    currentIndex=i
    
}


function search(){
    let cartona="";
    for(let i=0;i<products.length;i++){
        if(products[i].prodName.includes(searchfield.value)){
            let newName=products[i].prodName.replace(searchfield.value,`<span class="text-bg-success">${searchfield.value}</span>`)
            cartona+=`<tr>
        <td>${i+1}</td>
        <td>${newName}</td>
        <td>${products[i].prodCategory}</td>
        <td>${products[i].prodPrice}</td>
        <td>${products[i].prodDescrition}</td>
        <td><button onclick="updateProduct(${i})"  class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button></td>
    </tr>`
        }
    }
    document.getElementById("tableBody").innerHTML=cartona;
}

