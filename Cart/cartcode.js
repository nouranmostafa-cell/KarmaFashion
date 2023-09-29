window.onload = ()=>{
    calculateTOTALPRICE();
    clickImgs();
}


let ChoiceCartName = document.getElementById('ChoiceCartName');
let selected = document.getElementsByClassName('selected')[0];
let caret = document.getElementsByClassName('caret')[0];
let menu = document.getElementsByClassName('menu')[0];
const options = menu.querySelectorAll('li');
let cartTable = document.getElementsByClassName('cartTable-show')[0];
let wishTable= document.getElementsByClassName('wishTable')[0];
let activeTable =cartTable ;

/****************** edit cart table *************/ /*https://www.tutorialspoint.com/How-to-add-rows-to-a-table-using-JavaScript-DOM#:~:text=the%20new%20Element-,Using%20the%20insertRow()%20Method,the%20position%20of%20the%20table.*/
/***we will update the data of the table in updateStoredData***/
let cartList = JSON.parse(localStorage.getItem("cartList"));
let table = document.getElementsByClassName("cartTable-show")[0].getElementsByTagName("tbody")[0];
let emptyBanner = document.getElementById("empty");

if(cartList==null||cartList.length==0){
    cartList=[];
    emptyBanner.setAttribute("visible",true);
    emptyBanner.querySelector("h1").innerHTML="your cart is Empty";
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

/*************** edit wish table *************/
/***we will update the data of the table in updateStoredData***/
let wishList = JSON.parse(localStorage.getItem("wishList"));
let wishtable = document.getElementsByClassName("wishTable")[0].getElementsByTagName("tbody")[0];

if(wishList==null||wishList.length==0){
    wishList=[];
}


wishList.forEach(wishItem =>{
    let row = document.createElement("tr");

    let c1 = document.createElement("td");
    c1.innerHTML = `
    <a><i class="fa-solid fa-circle-xmark"></i></a>
    `;

    let c2 = document.createElement("td");
    c2.className ="proImg";
    c2.innerHTML= `
    <img src="${wishItem.img}"alt="">
    `;

    let c3 = document.createElement("td");
    c3.className ="proName";
    c3.innerHTML= wishItem.name;
    
    let c4 = document.createElement("td");
    c4.className ="proPrice";
    c4.innerHTML= "$"+wishItem.price;
    
    let c5 = document.createElement("td");
    c5.innerHTML= `
        <div class="quantityButton"> <!--https://www.youtube.com/watch?v=uliYkHK3pKg-->
            <span class="minus">-</span>
            <span class = 'quantityNumber'>${wishItem.num}</span>
            <span class="plus">+</span>
        </div>
    `;
    
    let c6 =  document.createElement("td");
    c6.className ="proTotalprice";
    c6.innerHTML="$"+wishItem.total;

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    row.appendChild(c6);

    wishtable.appendChild(row);


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
        if(minusBtn.closest("section").className=='cartSection cartTable-show'){
            updateStoredDataCart(minusBtn,cartList,"cartList");
        }
        else{
            updateStoredDataCart(minusBtn,wishList,"wishList");
        }
    });
});

plusBtns.forEach(plusBtn => {
    plusBtn.addEventListener('click',()=>{
        quantityNum = Number(plusBtn.parentElement.querySelector('.quantityNumber').innerHTML);
        (quantityNum<30)? quantityNum++:30;
        plusBtn.parentElement.querySelector('.quantityNumber').innerHTML = quantityNum;
        plusBtn.parentElement.parentElement.parentElement.querySelector('.proTotalprice').innerHTML = '$'+quantityNum*Number( plusBtn.parentElement.parentElement.parentElement.querySelector('.proPrice').innerHTML.slice(1));
        calculateTOTALPRICE();
        if(plusBtn.closest("section").className=='cartSection cartTable-show'){
            updateStoredDataCart(plusBtn,cartList,"cartList");
        }
        else{
            updateStoredDataCart(plusBtn,wishList,"wishList");
        }
    });
});


function updateStoredDataCart(Btn,list,typeList){
    list.forEach(cartItem=>{
        if(cartItem.name == Btn.parentElement.parentElement.parentElement.querySelector('.proName').innerHTML){
            cartItem.total = Btn.parentElement.parentElement.parentElement.querySelector('.proTotalprice').innerHTML.slice(1);
            cartItem.num =  Btn.parentElement.querySelector('.quantityNumber').innerHTML;
            localStorage.setItem(typeList,JSON.stringify(list));
        }
    })
}

function deleteStoredDataCart(Btn,list,typeList){
    list.forEach((cartItem,index)=>{
        if(cartItem.name == Btn.closest('tr').querySelector('.proName').innerHTML){
            list.splice(index,1);
            localStorage.setItem(typeList,JSON.stringify(list));
        }
    })
    if(list.length==0){
        emptyBanner.setAttribute("visible",true); 
        if(typeList=="wishList"){
            emptyBanner.querySelector("h1").innerHTML="your Wishcart is Empty";
        }
        else{
            emptyBanner.querySelector("h1").innerHTML="your Cart is Empty";
        }
    }
}


/****** cart choice*****/



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
        emptyBanner.setAttribute("visible",false); 
        activeTable = cartTable;
        if(cartList.length==0){
            emptyBanner.setAttribute("visible",true); 
            emptyBanner.querySelector("h1").innerHTML="your Cart is Empty";
        }
        calculateTOTALPRICE();
        clickImgs();
    }
    else{
        cartTable.className='cartSection cartTable';
        wishTable.className='cartSection wishTable-show';
        emptyBanner.setAttribute("visible",false); 
        if(wishList.length==0){
            console.log("ee");
            emptyBanner.querySelector("h1").innerHTML="your wishCart is Empty";
            emptyBanner.setAttribute("visible",true); 
        }
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
        if(removeBtn.closest("section").className=='cartSection cartTable-show'){
            deleteStoredDataCart(removeBtn,cartList,"cartList");
        }
        else{
            deleteStoredDataCart(removeBtn,wishList,"wishList");
        }
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



