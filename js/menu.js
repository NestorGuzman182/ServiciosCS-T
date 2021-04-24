const ipad = window.matchMedia('screen and (max-width: 786px');
console.log(window.matchMedia('screen and (max-width: 786px'));


const menu = document.querySelector('.navbar');
const showButton = document.querySelector('#btn-menu');




ipad.addListener(validate);

function validate (event){
    if(event.matches){
        showButton.addEventListener('click', show)
    }else{ 
        showButton.removeEventListener('click', show)
    }
}
    validate(ipad);

function show (){
    menu.classList.toggle('is-active');
    console.log(menu.classList)
}
