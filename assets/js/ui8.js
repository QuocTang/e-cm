var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000) 

const item_8 = document.querySelector('.js-item-8')
const btn_item_8_add = document.querySelector('.js-btn-item-8-add')
const btn_item_8_delete = document.querySelector('.js-item-8-delete')

function addCart8(){
    item_8.classList.add('item-open')
}


function deleteCart8(){
    item_8.classList.remove('item-open')
}

btn_item_8_add.addEventListener('click', addCart8)
btn_item_8_delete.addEventListener('click', deleteCart8)

//buy
const btn_buy = document.querySelector('.description_detail--button .btn--primary')

function alert_buy(){
    alert("Mua thành công")
    
}

btn_buy.addEventListener('click', alert_buy)