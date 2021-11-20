var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000) 

const item_6 = document.querySelector('.js-item-6')
const btn_item_6_add = document.querySelector('.js-btn-item-6-add')
const btn_item_6_delete = document.querySelector('.js-item-6-delete')

function addCart6(){
    item_6.classList.add('item-open')
}


function deleteCart6(){
    item_6.classList.remove('item-open')
}

btn_item_6_add.addEventListener('click', addCart6)
btn_item_6_delete.addEventListener('click', deleteCart6)

//buy
const btn_buy = document.querySelector('.description_detail--button .btn--primary')

function alert_buy(){
    alert("Mua thành công")
    
}

btn_buy.addEventListener('click', alert_buy)