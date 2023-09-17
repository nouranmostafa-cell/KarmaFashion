window.onload = ()=>{
    calculateTOTALPRICE();
    clickImgs();
}


minusBtns = document.querySelectorAll('.minus');
plusBtns = document.querySelectorAll('.plus');
let quantityNum;

minusBtns.forEach(minusBtn => {
    minusBtn.addEventListener('click',()=>{
        quantityNum = Number(minusBtn.parentElement.querySelector('.quantityNumber').innerHTML);
        (quantityNum>1)? quantityNum--:1;
        minusBtn.parentElement.querySelector('.quantityNumber').innerHTML = quantityNum;
        minusBtn.parentElement.parentElement.parentElement.querySelector('.proTotalprice').innerHTML = quantityNum*Number( minusBtn.parentElement.parentElement.parentElement.querySelector('.proPrice').innerHTML.slice(1));
        calculateTOTALPRICE();
    });
});

plusBtns.forEach(plusBtn => {
    plusBtn.addEventListener('click',()=>{
        quantityNum = Number(plusBtn.parentElement.querySelector('.quantityNumber').innerHTML);
        (quantityNum<30)? quantityNum++:30;
        plusBtn.parentElement.querySelector('.quantityNumber').innerHTML = quantityNum;
        plusBtn.parentElement.parentElement.parentElement.querySelector('.proTotalprice').innerHTML = '$'+quantityNum*Number( plusBtn.parentElement.parentElement.parentElement.querySelector('.proPrice').innerHTML.slice(1));
        calculateTOTALPRICE();
    });
});



/****** cart choice*****/

let ChoiceCartName = document.getElementById('ChoiceCartName');
let selected = document.getElementsByClassName('selected')[0];
let caret = document.getElementsByClassName('caret')[0];
let menu = document.getElementsByClassName('menu')[0];
const options = menu.querySelectorAll('li');
let cartTable = document.getElementsByClassName('cartTable-show')[0];
let wishTable= document.getElementsByClassName('wishTable')[0];
let activeTable =cartTable ;

caret.addEventListener('click',()=>{
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
})

options.forEach(option => {
    option.addEventListener('click',()=>{
        selected.innerHTML=option.innerHTML;
        ChoiceCartName.innerHTML=option.innerHTML;
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
        showTable();
    })
});

function showTable(){
    if(ChoiceCartName.innerHTML =="My Cart"){
        cartTable.className='cartSection cartTable-show';
        wishTable.className='cartSection wishTable';
        activeTable = cartTable;
        calculateTOTALPRICE();
        clickImgs();
    }
    else{
        cartTable.className='cartSection cartTable';
        wishTable.className='cartSection wishTable-show';
        activeTable=wishTable;
        calculateTOTALPRICE();
        clickImgs();
    }
}

/************* cart actions************/

//remove buttons

let removeBtns = document.querySelectorAll('.fa-circle-xmark');

removeBtns.forEach(removeBtn=>{
    removeBtn.addEventListener('click',()=>{
        removeBtn.closest('tr').remove();  //https://bobbyhadz.com/blog/javascript-get-parent-element-by-class
        calculateTOTALPRICE();
    });
});

//subtotals in cartTotal
let cart_subtotal = document.getElementById('subtotalPrice');
let cart_total = document.getElementById('totalPrice');
let couponText = document.getElementById('couponDiscount');
let coupon =0 ; 

function calculateTOTALPRICE(){
    let totalPrice = 0 ;
    productPrices = activeTable.querySelectorAll('.proTotalprice');
    productPrices.forEach(productPrice=>{
        totalPrice=Number(productPrice.innerHTML.slice(1))+totalPrice;
    });
    cart_subtotal.innerHTML = '$'+totalPrice ;
    cart_total.innerHTML ='$'+Number(totalPrice-coupon); 
}

//coupons
function applyCoupon(){
//https://www.tabnine.com/academy/javascript/get-value-of-input/

    let couponInput = document.getElementById('couponInput').value;
    /*if(coupon exists in coupon database){
        apply the value of the coupon to coupon variable
    }*/
    coupon = Number(couponInput);
    couponText.innerHTML ='$'+ coupon ;
    calculateTOTALPRICE();
}

//move data to payment page
function moveToPayment(){
    localStorage.setItem("paymentData",JSON.stringify({subtotal:cart_subtotal.innerHTML, total:cart_total.innerHTML , couponPrice:couponText.innerHTML}));
    window.location.href='payment.html';
}


/***************** click on img in table and go to sproduct page *************/
let productImg ;
let productName;
let productPrice;

function clickImgs(){
    let proImgs =activeTable.querySelectorAll('img');
    proImgs.forEach(proImg=>{
        proImg.addEventListener('click',()=>{
            productImg = proImg.src ;
            productName= proImg.parentElement.parentElement.querySelector(".proName").innerHTML ; 
            productPrice= proImg.parentElement.parentElement.querySelector(".proPrice").innerHTML ;   
            localStorage.setItem("myProduct",JSON.stringify({img:productImg, name:productName , price:productPrice}));
            window.location.href='../Shop/sproduct.html';        
        });
    });
}



