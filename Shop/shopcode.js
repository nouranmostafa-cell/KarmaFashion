let productImg ;
let productName;
let productPrice; 
let productNum;
let productTotalPrice;

/************** transfer data to sproduct page **********/
pro_imgs.forEach( (element) => {
    element.onmousedown = function(){
        productImg = element.src;
        productName = element.parentElement.querySelector("#shopTitle").innerHTML; //https://www.geeksforgeeks.org/how-to-get-the-child-element-of-a-parent-using-javascript/
        productPrice = element.parentElement.querySelector("#shopPrice").innerHTML;
        localStorage.setItem("myProduct",JSON.stringify({img:productImg, name:productName , price:productPrice}));
        if(pageName == "Karma Fashion"){
            window.location.href='Shop/sproduct.html';
        }
        else{
            window.location.href='sproduct.html';
        }
    };

});

let existing = localStorage.getItem("cartList"); // https://stackoverflow.com/questions/16083919/push-json-objects-to-array-in-localstorage
existing = existing? JSON.parse(existing): [];


function addToCartInShop(element){
    if(element.parentElement.className=="single-pro-details"){
        addToCartInSproduct(element);
    }
    else{
        productName = element.parentNode.parentNode.querySelector("#shopTitle").innerHTML;
        productImg =  element.parentNode.parentNode.querySelector(".pro_img").src;
        productPrice = element.parentNode.parentNode.querySelector("#shopPrice").getAttribute("value");
        productNum = element.parentNode.parentNode.querySelector(".quantityNumber").innerHTML;
        productTotalPrice =  element.parentNode.parentNode.querySelector("#shopPrice").innerHTML.slice(1);

        let productData = {
            img:productImg,
            name:productName,
            price:productPrice,
            num: productNum , 
            total : productTotalPrice
        }

        existing.push(productData);
        console.log(existing);
        localStorage.setItem("cartList",JSON.stringify(existing));
    }

}




