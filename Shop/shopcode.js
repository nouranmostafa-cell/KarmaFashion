let productImg ;
let productName;
let productPrice; 


/************** transfer data to sproduct page **********/
pro_imgs.forEach( (element) => {
    element.onmousedown = function(){
        productImg = element.src;
        productName = element.parentElement.querySelector("#shopTitle").innerHTML; //https://www.geeksforgeeks.org/how-to-get-the-child-element-of-a-parent-using-javascript/
        productPrice = element.parentElement.querySelector("#shopPrice").innerHTML;
        localStorage.setItem("myProduct",JSON.stringify({img:productImg, name:productName , price:productPrice}));
        window.location.href='sproduct.html';
    };

});

