var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000) 

const item_7 = document.querySelector('.js-item-7')
const btn_item_7_add = document.querySelector('.js-btn-item-7-add')
const btn_item_7_delete = document.querySelector('.js-item-7-delete')

function addCart7(){
    item_7.classList.add('item-open')
}


function deleteCart7(){
    item_7.classList.remove('item-open')
}

btn_item_7_add.addEventListener('click', addCart7)
btn_item_7_delete.addEventListener('click', deleteCart7)

//buy
const btn_buy = document.querySelector('.description_detail--button .btn--primary')

function alert_buy(){
    alert("Mua thành công")
    
}

btn_buy.addEventListener('click', alert_buy)