var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000) 

const item_4 = document.querySelector('.js-item-4')
const btn_item_4_add = document.querySelector('.js-btn-item-4-add')
const btn_item_4_delete = document.querySelector('.js-item-4-delete')

function addCart4(){
    item_4.classList.add('item-open')
}


function deleteCart4(){
    item_4.classList.remove('item-open')
}

btn_item_4_add.addEventListener('click', addCart4)
btn_item_4_delete.addEventListener('click', deleteCart4)

//buy
const btn_buy = document.querySelector('.description_detail--button .btn--primary')

function alert_buy(){
    alert("Mua thành công")
    
}

btn_buy.addEventListener('click', alert_buy)