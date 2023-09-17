

//recieve data from cart page 
let cartData =JSON.parse(localStorage.getItem("paymentData"));
let subtotalPrice= document.getElementById('subtotalPrice');
let couponDiscount= document.getElementById('couponDiscount');
let totalPrice= document.getElementById('totalPrice');

subtotalPrice.innerHTML = cartData.subtotal;
couponDiscount.innerHTML =cartData.couponPrice;
totalPrice.innerHTML = cartData.total;


let radioBtns = document.querySelectorAll("input[type=radio]");

radioBtns.forEach(radioBtn=>{  //https://stackoverflow.com/questions/58606047/how-to-use-on-addeventlistener-on-radio-button-in-plain-javascript
    radioBtn.addEventListener('change',function(){
        if(radioBtn.value =='online'){
            document.getElementById('onlineSection').innerHTML=`
            <h3 style="width: 100%;">Accepted Cards</h3>
            <img src="images/Payments-Options-Accepted-1536x319.png">
            <div class="fullDiv">
                <label for="cardnumber">CreditCard Number</label>
                <br>
                <input type="text"placeholder="Enter Card Number"id="cardnumber"name="cardnumber"required>
            </div>
            <div class="fullDiv">
                <label for="expmonth">Exp. Month</label>
                <br>
                <input type="text"placeholder="Enter Month"id="expmonth"name="expmonth"required>
            </div>
            <div class="halfDiv">
                <label for="cvv">CVV</label>
                <br>
                <input type="text"placeholder="Cvv"id="cvv"name="cvv"required>
            </div>
            <div class="halfDiv">
                <label for="expyear">Exp. Year</label>
                <br>
                <input type="text"placeholder="Enter Year"id="expyear"name="expyear"required>
            </div>
            `;
        }
        else{
            
            document.getElementById('onlineSection').innerHTML=``;
            
        }
    })
});




let form = document.getElementsByTagName('form')[0];

function submit(){
    
    //remove form to move to next page , remove it
    form.remove();
    //if(form.checkValidity()){ //https://stackoverflow.com/questions/51697486/html-required-attribute-not-working-with-button-function
        window.location.href='orderRecorded.html';
    //}
}
