const modalSignUp = document.querySelector('.js-modal-sign-up');
const modalLogIn = document.querySelector('.js-modal-login');

const modalContainerSignUp = document.querySelector('.js-modal-container-sign-up');
const modalContainerLogin = document.querySelector('.js-modal-container-login');

const btnDk = document.querySelector('.js-dk')
const btnDn = document.querySelector('.js-dn')

const btnBackSignup = document.querySelector('.js-modal-close-sign-up')
const btnBackLogin = document.querySelector('.js-modal-close-login')

const backOverLay = document.querySelector('.js-overlay')
const modalMain = document.querySelector('.js-main')

const closeLoginSignUp = document.querySelector('.js-container_login_signup')
const btnModalLogin = document.querySelector('.js-modal-login-btn')
const logOut = document.querySelector('.js-log-out')
const divAccount = document.querySelector('.js-account')

function showSignUp(){
    modalSignUp.classList.add('open');
    backOverLay.classList.add('open_overlay');
    modalMain.classList.add('modal_main');
}

function showLogin(){
    modalLogIn.classList.add('open');
    backOverLay.classList.add('open_overlay');
    modalMain.classList.add('modal_main');
}

function hideSignUp(){
    modalSignUp.classList.remove('open');
    backOverLay.classList.remove('open_overlay');
    modalMain.classList.remove('modal_main');
}

function hideLogin(){
    modalLogIn.classList.remove('open');
    backOverLay.classList.remove('open_overlay');
    modalMain.classList.remove('modal_main');
}

function changeLoginSignUp(e){
    closeLoginSignUp.classList.add('close_login_signup')
    divAccount.classList.remove('account')
    hideLogin()
}

function fu_logout(){
    divAccount.classList.add('account')
}

btnDk.addEventListener('click', showSignUp)
btnDn.addEventListener('click', showLogin)

btnBackSignup.addEventListener('click', hideSignUp)
btnBackLogin.addEventListener('click', hideLogin)

btnModalLogin.addEventListener('click', changeLoginSignUp)

logOut.addEventListener('click', fu_logout)

modalContainerSignUp.addEventListener('click', function(e){
    e.stopPropagation()
})
// authControl.addEventListener('click', function(e){
//     e.stopPropagation();
    
// })

// js for detail
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000) 
//add cart
const item_1 = document.querySelector('.js-item-1');
const btn_item_1_add = document.querySelector('.js-btn-item-1-add');
const btn_item_1_delete = document.querySelector('.js-item-1-delete');

function addCart1(){
    item_1.classList.add('item-open');
}


function deleteCart1(){
    item_1.classList.remove('item-open');
}
btn_item_1_add.addEventListener('click', addCart1);
btn_item_1_delete.addEventListener('click', deleteCart1);

//buy
const btn_buy = document.querySelector('.description_detail--button .btn--primary')

function alert_buy(){
    alert("Mua thành công")
    
}

btn_buy.addEventListener('click', alert_buy)
