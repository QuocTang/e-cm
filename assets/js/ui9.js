var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000) 

const item_9 = document.querySelector('.js-item-9')
const btn_item_9_add = document.querySelector('.js-btn-item-9-add')
const btn_item_9_delete = document.querySelector('.js-item-9-delete')

function addCart9(){
    item_9.classList.add('item-open')
}


function deleteCart9(){
    item_9.classList.remove('item-open')
}

btn_item_9_add.addEventListener('click', addCart9)
btn_item_9_delete.addEventListener('click', deleteCart9)

//buy
const btn_buy = document.querySelector('.description_detail--button .btn--primary')

function alert_buy(){
    alert("Mua thành công")
    
}

btn_buy.addEventListener('click', alert_buy)