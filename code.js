
console.log('hi preload');

window.onload = ()=>{
    console.log('hi load');
}

/********* preload images of banner********/

function preload_image(im_url) {
    let img = new Image();
    img.src = im_url;
}
preload_image('images/bannerImgs/Layer 1.png');
preload_image('images/bannerImgs/Layer 3.png');
preload_image('images/bannerImgs/Layer 2.png');


/*********** get the name of pages in js to activate/deactivate some code  *******/
let pageName = document.getElementsByTagName('title')[0].innerHTML;
console.log(pageName);


/********* mobile nav bar ********/
let navRightbar = document.getElementById("navRightpart");
let mobileIcon = document.getElementById("mobileIcon");

function showNav(){
    if(navRightbar.getAttribute("data-visible")=="false"){
        navRightbar.setAttribute("data-visible",true);
        mobileIcon.firstElementChild.className = "fa-solid fa-x";
    }
    else{
        navRightbar.setAttribute("data-visible",false);
        mobileIcon.firstElementChild.className = "fas fa-bars fa-xl";
    }
}


/**************  nav bar change icons if signed in  ************/

let signed = false;
let signedState = sessionStorage.getItem("signState");
console.log("signedState"+signedState);
let cartIcon = document.getElementById("cartLogo");

if(signed ==true || signedState){
    cartIcon.className="fa-solid fa-basket-shopping";
    mobileIcon.parentNode.getElementsByTagName("i")[0].className="fa-solid fa-basket-shopping";

    if(pageName=='Karma Fashion'){
        mobileIcon.parentNode.getElementsByTagName("a")[0].href ="../KarmaFashion/Cart/cart.html";
        cartIcon.parentNode.href ="../KarmaFashion/Cart/cart.html";
    }
    else{
        mobileIcon.parentNode.getElementsByTagName("a")[0].href ="../Cart/cart.html";
        cartIcon.parentNode.href ="../Cart/cart.html";
    }
}
else{
    cartIcon.className="fa-solid fa-user-plus";
    mobileIcon.parentNode.getElementsByTagName("i")[0].className="fa-solid fa-user-plus";
    if(pageName=='Karma Fashion'){
        mobileIcon.parentNode.getElementsByTagName("a")[0].href ="../KarmaFashion/Signing/signup.html";
        cartIcon.parentNode.href ="../KarmaFashion/Signing/signup.html";
    }
    else{
        mobileIcon.parentNode.getElementsByTagName("a")[0].href ="../Signing/signup.html";
        cartIcon.parentNode.href ="../Signing/signup.html";
    }
    
}



/*******************Animation of images in banner***********/

const bannerAnim = gsap.timeline({paused: true });   /*https://greensock.com/forums/topic/15996-timeline-reverse-repeat/*/ /* https://greensock.com/forums/topic/22564-reverse-animation-in-a-timeline-for-an-object/ */
let media1 = window.matchMedia("(min-width: 811px)");
let media2 = window.matchMedia("(max-width: 810px)");
let bannerImg = document.querySelectorAll('.imgB'); 

if(media1.matches){
    bannerImg.forEach((element)=>{
        element.style.right= '-20em';
    });
}
else if(media2.matches){
    bannerImg.forEach((element)=>{
        element.style.right= '-31.5em';
    });
}

bannerAnim.to(".img1", 1.5, { x:-750 , transformOrigin:"center bottom", ease: Power4.easeInOut}); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/
bannerAnim.to(".img2", 1.5, { x:-500 , transformOrigin:"center bottom", ease: Power4.easeInOut}); 
bannerAnim.to(".img3", 1.5, { x:-250 , transformOrigin:"center bottom", ease: Power4.easeInOut});     


/*********************** animation of cards in features ********************/

const deliveryAnim = gsap.timeline({paused: true ,repeat:-1,repeatDelay: 0.1,yoyo: true}); 
const deliveryCar = gsap.timeline({paused: true ,repeat:-1,repeatDelay: 0.1,yoyo: true}); 

const onlineAnim = gsap.timeline({paused: true ,repeat:-1,repeatDelay: 0.1,yoyo: true}); 

const moneyAnim = gsap.timeline({paused: true ,repeat:-1,repeatDelay: 0.1,yoyo: true});
const moneyAnimYoyo = gsap.timeline({paused: true ,repeat:-1,repeatDelay: 0.1,yoyo: false}); 

const sellAnim = gsap.timeline({paused: true ,repeat:-1,repeatDelay: 0.1,yoyo: true}); 

const promoAnim = gsap.timeline({paused: true ,repeat:-1,repeatDelay: 0.1,yoyo: true}); 

const supportAnim = gsap.timeline({paused: true ,repeatDelay: 0.1}); 



if(pageName=='Karma Fashion'){

//delivery Car
deliveryAnim.to("#deliveryleaf1", 1.2, { rotation:10, transformOrigin:"center bottom", ease: Power4.linear},0); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/
deliveryAnim.to("#deliveryleaf2", 1.2, { rotation:-10, transformOrigin:"center bottom", ease: Power4.linear},0); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/
deliveryCar.to("#deliverycar",0.1,  { y:65, transformOrigin:"center bottom", ease: Power4.linear},0); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/

//online
onlineAnim.to("#onlineFinger",0.8,  { y:1000, transformOrigin:"center bottom", ease: Power4.linear},0); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/

//Money 
moneyAnim.to("#moneyEffect",0.6,  { opacity:0, transformOrigin:"center bottom", ease: Power4.linear},0); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/

moneyAnimYoyo.to("#moneyCoins",0.9,  { y:80, transformOrigin:"center bottom", ease: Power4.linear},0); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/

//sell

sellAnim.to("#salesMan", 0.5, { rotation:-10, transformOrigin:"center bottom", ease: Power4.linear},0); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/
sellAnim.to("#salesWoman", 0.5, { rotation:10, transformOrigin:"center bottom", ease: Power4.linear},0); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/

//promotion
promoAnim.to("#promotionFace", 0.5, { rotation:-20, transformOrigin:"center center", ease: Power4.linear},0); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/
promoAnim.to("#promotionMic", 0.5, { rotation:-20, transformOrigin:"left bottom", ease: Power4.linear},0); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/

//support 
supportAnim.to("#supportGear1", 2, { rotation:360, transformOrigin:"center center", repeat:-1,yoyo: true,ease: Power4.linear},0); 
// repeat:-1,yoyo: true,, make that part of the animation repeat when the its time ends 
supportAnim.to("#supportFace", 1, { rotation:7, transformOrigin:"center bottom", repeat:-1 ,yoyo: true,ease: Power4.linear},0); 
// repeat:-1,yoyo: true ,,make that part of the animation repeat when the its time ends 

}


/*********************** hover effect of cards "pro" in features product when hovering over pro img ********************/


let pro_imgs = document.querySelectorAll(".pro_img"); 
let pros = document.querySelectorAll(".pro");

let body =document.getElementsByTagName("body")[0];
let header = document.getElementsByTagName("header")[0];
let banner = document.getElementsByClassName("banner")[0];
let features = document.getElementsByClassName("features")[0] ;
let products1 =  document.getElementsByClassName("products1")[0];
let productPreview =  document.getElementsByClassName("productPreview")[0];
let products2 =   document.getElementsByClassName("products2")[0];
let callAction1 =   document.getElementById("callAction1");
let callActionBanners =   document.getElementById("callActionBanners");
let popAlert= document.getElementsByClassName("popup")[0];

pro_imgs.forEach( (element) => {

    element.onmouseover = function(){
        element.parentNode.setAttribute("hover-effect", true); /* https://www.w3schools.com/jsref/event_onmouseover.asp */
    };

    element.onmouseleave = function(){
        element.parentNode.setAttribute("hover-effect", false);
    };
});

if(pageName=='Karma Fashion'){

    pro_imgs.forEach( (element) => {
        element.onmousedown = function(){
            // header.classList.toggle("blurred");
            // banner.classList.toggle("blurred");
            // features.classList.toggle("blurred");
            // products1.classList.toggle("blurred");
            // products2.classList.toggle("blurred");
            // callAction1.classList.toggle("blurred");
            // callActionBanners.classList.toggle("blurred");
            // productPreview.setAttribute("data-show",true);
            // header.style.pointerEvents="none"; /* to prevent user from clicking on it*/ /*https://www.w3schools.com/cssref/css3_pr_pointer-events.php*/
            // products1.style.pointerEvents="none";
            // products2.style.pointerEvents="none";
            // callAction1.style.pointerEvents="none";
            // callActionBanners.style.pointerEvents="none";
            // banner.style.pointerEvents="none";
            // productPreview.getElementsByTagName("img")[0].src=element.src;
            // body.classList.add("stop-scrolling");
            
            


        };
    
    });
    
    // function closePreview(){
    //     productPreview.setAttribute("data-show",false);
    //     header.classList.toggle("blurred");
    //     banner.classList.toggle("blurred");
    //     features.classList.toggle("blurred");
    //     products1.classList.toggle("blurred");
    //     products2.classList.toggle("blurred");
    //     callAction1.classList.toggle("blurred");
    //     callActionBanners.classList.toggle("blurred");
    
    //     header.style.pointerEvents="auto";
    //     products1.style.pointerEvents="auto";
    //     banner.style.pointerEvents="auto";
    //     products2.style.pointerEvents="auto";
    //     callAction1.style.pointerEvents="auto";
    //     callActionBanners.style.pointerEvents="auto";
    //     body.classList.remove("stop-scrolling");
    
    // }
}


if( signed ==true || signedState){
    function addToCart(element){
        popAlert.getElementsByTagName('p')[0].innerHTML='this item has been added to cart <span>successfully!</span>';
        popAlert.setAttribute("pop-show",true);
        console.log(element);
        addToCartInShop(element);
    }
    function addToWishList(element){
        popAlert.getElementsByTagName('p')[0].innerHTML='this item has been added to wishList <span>successfully!</span>';
        popAlert.setAttribute("pop-show",true);
        addToWishInShop(element);

    }
}
else{
    function addToCart(element){
        popAlert.getElementsByTagName('p')[0].innerHTML='Sign up/in first';
        popAlert.setAttribute("pop-show",true);

    }
    function addToWishList(element){
        popAlert.getElementsByTagName('p')[0].innerHTML='Sign up/in first';
        popAlert.setAttribute("pop-show",true);
    }
}    


popAlert.addEventListener("animationend", () => {  //https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event 
    popAlert.setAttribute("pop-show",false);
})





/******************* run animations  ***************/
bannerAnim.restart();
deliveryAnim.restart();
deliveryCar.restart();
onlineAnim.restart();
moneyAnim.restart();
moneyAnimYoyo.restart();
sellAnim.restart();
promoAnim.restart();
supportAnim.restart();


/******************  quantity button  ****************/


mainMinusBtns = document.querySelectorAll('.price_NumberContainer .minus');
mainPlusBtns = document.querySelectorAll('.price_NumberContainer .plus');
let mainquantityNum;

mainMinusBtns.forEach(minusBtn => {
    minusBtn.addEventListener('click',()=>{
        let price =  Number(minusBtn.parentElement.parentElement.querySelector('.proPrice').getAttribute("value"));
        mainquantityNum = Number(minusBtn.parentElement.querySelector('.quantityNumber').innerHTML);
        (mainquantityNum>1)? mainquantityNum--:1;
        minusBtn.parentElement.querySelector('.quantityNumber').innerHTML = mainquantityNum;
        minusBtn.parentElement.parentElement.querySelector('.proPrice').innerHTML = '$'+mainquantityNum*price;
    });
});

mainPlusBtns.forEach(plusBtn => {
    plusBtn.addEventListener('click',()=>{
        let price =  Number(plusBtn.parentElement.parentElement.querySelector('.proPrice').getAttribute("value"));
        mainquantityNum = Number(plusBtn.parentElement.querySelector('.quantityNumber').innerHTML);
        (mainquantityNum<30)? mainquantityNum++:30;
        plusBtn.parentElement.querySelector('.quantityNumber').innerHTML = mainquantityNum;
        plusBtn.parentElement.parentElement.querySelector('.proPrice').innerHTML = '$'+mainquantityNum*price;
    });
});



