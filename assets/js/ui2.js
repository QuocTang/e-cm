var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 3000) 
//cart2
const item_2 = document.querySelector('.js-item-2')
const btn_item_2_add = document.querySelector('.js-btn-item-2-add')
const btn_item_2_delete = document.querySelector('.js-item-2-delete')

function addCart2(){
    item_2.classList.add('item-open')
}

function deleteCart2(){
    item_2.classList.remove('item-open')
}

btn_item_2_add.addEventListener('click', addCart2)
btn_item_2_delete.addEventListener('click', deleteCart2)

//buy
const btn_buy = document.querySelector('.description_detail--button .btn--primary')

function alert_buy(){
    alert("Mua thành công")
    
}

btn_buy.addEventListener('click', alert_buy)