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


/********add items to cart*******/

let existing = localStorage.getItem("cartList"); // https://stackoverflow.com/questions/16083919/push-json-objects-to-array-in-localstorage
existing = existing? JSON.parse(existing): [];


function addToCartInShop(element){

    let itemExists = false;

    if(element.parentElement.className=="single-pro-details"){
        addToCartInSproduct(element);
    }
    else{

        /* to check if the clicked item is already in the cart list and if it exists update the data in it*/
        existing.forEach(cartItem=>{
            if(cartItem.name ==  element.parentNode.parentNode.querySelector("#shopTitle").innerHTML){
                cartItem.total =  Number(cartItem.total)+ Number(element.parentNode.parentNode.querySelector("#shopPrice").innerHTML.slice(1));
                cartItem.num =  Number(cartItem.num) + Number(element.parentNode.parentNode.querySelector(".quantityNumber").innerHTML) ;
                localStorage.setItem("cartList",JSON.stringify(existing));
                itemExists = true;
            }
        })


        if(!itemExists){
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
            localStorage.setItem("cartList",JSON.stringify(existing));
        }
    }

}




/************* add items to wish list***********/

let existingWish = localStorage.getItem("wishList"); // https://stackoverflow.com/questions/16083919/push-json-objects-to-array-in-localstorage
existingWish = existingWish? JSON.parse(existingWish): [];


function addToWishInShop(element){

    if(element.parentElement.className=="single-pro-details"){
        addToWishInSproduct(element);
    }
    else{
        let itemExists = false;

        /* to check if the clicked item is already in the cart list and if it exists update the data in it*/
        existingWish.forEach(cartItem=>{
            if(cartItem.name ==  element.parentNode.parentNode.querySelector("#shopTitle").innerHTML){
                cartItem.total =  Number(cartItem.total)+ Number(element.parentNode.parentNode.querySelector("#shopPrice").innerHTML.slice(1));
                cartItem.num =  Number(cartItem.num) + Number(element.parentNode.parentNode.querySelector(".quantityNumber").innerHTML) ;
                localStorage.setItem("wishList",JSON.stringify(existingWish));
                itemExists = true;
            }
        })

        if(!itemExists){
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
    
            existingWish.push(productData);
            localStorage.setItem("wishList",JSON.stringify(existingWish));
        }
    }

}