// console.log(vm_123.quantity);
window.addEventListener('load', function(){
    let shoppingCart_quantity = document.getElementById('shoppingCart_quantity');
    if(localStorage.getItem('addProduct')){
        let shopping_list = JSON.parse(localStorage.getItem('addProduct'));
        // console.log(shopping_list);
        shoppingCart_quantity.innerText = shopping_list.length;
        // console.log(0);
    }else{
        // console.log(localStorage.getItem('addProduct'));
        shoppingCart_quantity.innerText = 0;
        // this.quantity = 0;
        // console.log(0);
    }
})