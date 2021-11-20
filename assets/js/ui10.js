var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000) 

const item_10 = document.querySelector('.js-item-10')
const btn_item_10_add = document.querySelector('.js-btn-item-10-add')
const btn_item_10_delete = document.querySelector('.js-item-10-delete')

function addCart10(){
    item_10.classList.add('item-open')
}


function deleteCart10(){
    item_10.classList.remove('item-open')
}

btn_item_10_add.addEventListener('click', addCart10)
btn_item_10_delete.addEventListener('click', deleteCart10)

//buy
const btn_buy = document.querySelector('.description_detail--button .btn--primary')

function alert_buy(){
    alert("Mua thành công")
    
}

btn_buy.addEventListener('click', alert_buy)