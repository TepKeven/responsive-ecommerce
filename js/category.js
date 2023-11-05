window.addEventListener("load",function(){
    filterSelection("all")
    addButtonDisplay();
})


function filterSelection(c) {
    
  var product_boxes, i;
  product_boxes = document.getElementsByClassName("product-box");

  if (c == "all") c = "";
  for (i = 0; i < product_boxes.length; i++) {
    displayProducts(product_boxes[i],c);
  }
}

function displayProducts(product,name){

    if (product.className.indexOf(name) > -1){

        addClassDisplay(product)

    }

    else{
        removeClassDisplay(product)
    }
}

function addClassDisplay(product) {

    if (product.parentNode.classList.contains("d-none")) {

        product.parentNode.classList.remove("d-none");
        product.classList.add("d-flex")
    }
}

function removeClassDisplay(product) {

    if (product.classList.contains("d-flex")) {

        product.parentNode.classList.add("d-none");
        product.classList.remove("d-flex")
    }
}

function addButtonDisplay(){

    var btnContainer = document.getElementById("buttonFilter");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}