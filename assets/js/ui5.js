var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000) 

const item_5 = document.querySelector('.js-item-5')
const btn_item_5_add = document.querySelector('.js-btn-item-5-add')
const btn_item_5_delete = document.querySelector('.js-item-5-delete')

function addCart5(){
    item_5.classList.add('item-open')
}


function deleteCart5(){
    item_5.classList.remove('item-open')
}

btn_item_5_add.addEventListener('click', addCart5)
btn_item_5_delete.addEventListener('click', deleteCart5)

//buy
const btn_buy = document.querySelector('.description_detail--button .btn--primary')

function alert_buy(){
    alert("Mua thành công")
    
}

btn_buy.addEventListener('click', alert_buy)