let passInput;
let passshow =false;

function showPass(element){

    passInput = element.parentNode.querySelector('input');
    if(!passshow){
        element.className='fa-solid fa-eye pass_show';
        passInput.type="text";
        passshow=true;
    }
    else{
        element.className='fa-solid fa-eye-slash pass_show';
        passInput.type="password";
        passshow=false;
    }
}

