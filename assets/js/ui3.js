var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000) 

const item_3 = document.querySelector('.js-item-3')
const btn_item_3_add = document.querySelector('.js-btn-item-3-add')
const btn_item_3_delete = document.querySelector('.js-item-3-delete')

function addCart3(){
    item_3.classList.add('item-open')
}


function deleteCart3(){
    item_3.classList.remove('item-open')
}

btn_item_3_add.addEventListener('click', addCart3)
btn_item_3_delete.addEventListener('click', deleteCart3)

//buy
const btn_buy = document.querySelector('.description_detail--button .btn--primary')

function alert_buy(){
    alert("Mua thành công")
    
}

btn_buy.addEventListener('click', alert_buy)