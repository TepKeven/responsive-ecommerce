window.addEventListener("load",function(){
    var btn_carts = document.getElementsByClassName("btn-cart");
    var btn_resets = this.document.getElementsByClassName("btn-reset");
    var btn_deletes = this.document.getElementsByClassName("btn-delete");
    var modal_confirm = this.document.getElementById("modalConfirm");
    for(let btn_cart of btn_carts){
        btn_cart.setAttribute("data-bs-toggle","modal");
        btn_cart.setAttribute("data-bs-target","#cartModal")
    }

    for(let btn_reset of btn_resets){
        btn_reset.addEventListener("click",resetItem);
    }

    for(let btn_delete of btn_deletes){
        btn_delete.addEventListener("click",deleteItem)
    }
    
    if(modal_confirm != null){
        modal_confirm.addEventListener("click", confirmCart);
    }
})

function confirmCart(){
    swal("Success", "Add to Cart Successfully", "success");
}

function resetItem(){

    var unit_price = this.parentNode.parentNode.getElementsByClassName("unit-price")[0];
    var total_price = this.parentNode.parentNode.getElementsByClassName("total-price")[0];
    var input_quantity = this.parentNode.parentNode.getElementsByClassName("input-quantity")[0];

    var price = unit_price.textContent.split("$")[1];
    var overall_price = parseInt(input_quantity.value) * parseInt(price);
    total_price.textContent = "$" + overall_price;

    swal("Success","Item Resets Successfully","success")
    
}

function deleteItem(){
    var item = this.parentNode.parentNode
    item.remove()

    swal("Success","Item Deletes Successfully","info")
}





