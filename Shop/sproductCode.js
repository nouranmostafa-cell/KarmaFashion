
productName = document.getElementById('proName');
productPrice = document.getElementById('proPrice');




/******************** change images in sproduct ****************/

let mainImg =document.getElementById('mainImg');
function changeMainImg(img){
    mainImg.src = img.src;
}


       // localStorage.setItem("myProduct",{img:productImg, name:productName , price:productPrice});



/************** recive data from shop page **********/ /* https://www.youtube.com/watch?v=x0VcigW9kN0*/

let productData =JSON.parse(localStorage.getItem("myProduct"));
mainImg.src= productData.img;
productName.innerHTML=productData.name;
productPrice.innerHTML=productData.price;





/*************** User Reviews **************/

let reviewSection = document.getElementById('reviewPage');
let userreviewSection = document.getElementById('reviewWrite');
let reviewAdd = document.getElementById('reviewAddBtn');

function addReview(){
    userreviewSection.setAttribute('data-show' , true);
}

function openReview(){
    reviewSection.setAttribute('data-show' , true);
}

function closeReviews(){
    userreviewSection.setAttribute('data-show' , false);
    reviewSection.setAttribute('data-show' , false);
}

function submitReview(){
    reviewAdd.remove();
    userreviewSection.innerHTML=`<h5 style="color:var(--purpleColor)">
        Thanks for your Feedback
    </h5>`;
}