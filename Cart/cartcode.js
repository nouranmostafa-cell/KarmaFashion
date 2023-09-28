window.onload = ()=>{
    calculateTOTALPRICE();
    clickImgs();
}


/****************** edit table *************/ /*https://www.tutorialspoint.com/How-to-add-rows-to-a-table-using-JavaScript-DOM#:~:text=the%20new%20Element-,Using%20the%20insertRow()%20Method,the%20position%20of%20the%20table.*/
/***we will update the data of the table in updateStoredData***/
let cartList = JSON.parse(localStorage.getItem("cartList"));
let table = document.getElementsByClassName("cartTable-show")[0].getElementsByTagName("tbody")[0];
let emptyBanner = document.getElementById("empty");

if(cartList.length==0){
    emptyBanner.setAttribute("visible",true);
}

cartList.forEach(cartItem =>{
    let row = document.createElement("tr");

    let c1 = document.createElement("td");
    c1.innerHTML = `
    <a><i class="fa-solid fa-circle-xmark"></i></a>
    `;

    let c2 = document.createElement("td");
    c2.className ="proImg";
    c2.innerHTML= `
    <img src="${cartItem.img}"alt="">
    `;

    let c3 = document.createElement("td");
    c3.className ="proName";
    c3.innerHTML= cartItem.name;
    
    let c4 = document.createElement("td");
    c4.className ="proPrice";
    c4.innerHTML= "$"+cartItem.price;
    
    let c5 = document.createElement("td");
    c5.innerHTML= `
        <div class="quantityButton"> <!--https://www.youtube.com/watch?v=uliYkHK3pKg-->
            <span class="minus">-</span>
            <span class = 'quantityNumber'>${cartItem.num}</span>
            <span class="plus">+</span>
        </div>
    `;
    
    let c6 =  document.createElement("td");
    c6.className ="proTotalprice";
    c6.innerHTML="$"+cartItem.total;

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    row.appendChild(c6);

    table.appendChild(row);


});



minusBtns = document.querySelectorAll('.cartSection .minus');
plusBtns = document.querySelectorAll('.cartSection .plus');
let quantityNum;

minusBtns.forEach(minusBtn => {
    minusBtn.addEventListener('click',()=>{
        quantityNum = Number(minusBtn.parentElement.querySelector('.quantityNumber').innerHTML);
        (quantityNum>1)? quantityNum--:1;
        minusBtn.parentElement.querySelector('.quantityNumber').innerHTML = quantityNum;
        minusBtn.parentElement.parentElement.parentElement.querySelector('.proTotalprice').innerHTML = '$'+quantityNum*Number( minusBtn.parentElement.parentElement.parentElement.querySelector('.proPrice').innerHTML.slice(1));
        calculateTOTALPRICE();
        updateStoredDataCart(minusBtn);
    });
});

plusBtns.forEach(plusBtn => {
    plusBtn.addEventListener('click',()=>{
        quantityNum = Number(plusBtn.parentElement.querySelector('.quantityNumber').innerHTML);
        (quantityNum<30)? quantityNum++:30;
        plusBtn.parentElement.querySelector('.quantityNumber').innerHTML = quantityNum;
        plusBtn.parentElement.parentElement.parentElement.querySelector('.proTotalprice').innerHTML = '$'+quantityNum*Number( plusBtn.parentElement.parentElement.parentElement.querySelector('.proPrice').innerHTML.slice(1));
        calculateTOTALPRICE();
        updateStoredDataCart(plusBtn);
    });
});


function updateStoredDataCart(Btn){
    cartList.forEach(cartItem=>{
        if(cartItem.name == Btn.parentElement.parentElement.parentElement.querySelector('.proName').innerHTML){
            cartItem.total = Btn.parentElement.parentElement.parentElement.querySelector('.proTotalprice').innerHTML.slice(1);
            cartItem.num =  Btn.parentElement.querySelector('.quantityNumber').innerHTML;
            localStorage.setItem("cartList",JSON.stringify(cartList));
        }
    })
}

function deleteStoredDataCart(Btn){
    cartList.forEach((cartItem,index)=>{
        if(cartItem.name == Btn.closest('tr').querySelector('.proName').innerHTML){
            cartList.splice(index,1);
            localStorage.setItem("cartList",JSON.stringify(cartList));
        }
    })
    if(cartList.length==0){
        emptyBanner.setAttribute("visible",true);
    }
}


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
        deleteStoredDataCart(removeBtn);
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
    if(cart_total.innerHTML.slice(1)=='0'){
        console.log("cart is Empty");
        popAlert.getElementsByTagName('p')[0].innerHTML='Add items to Cart';
        popAlert.setAttribute("pop-show",true);
    }
    else{
        localStorage.setItem("paymentData",JSON.stringify({subtotal:cart_subtotal.innerHTML, total:cart_total.innerHTML , couponPrice:couponText.innerHTML}));
        window.location.href='payment.html';
    }

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



