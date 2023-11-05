window.addEventListener("load",function(){

    var view_count = this.document.getElementById("view-count");
    var new_view_count;
    var path = window.location.pathname;
    var page = path.split("/"). pop().split(".")[0]; // jewelry.html => jewelry

    if(page + "-view-count" in this.sessionStorage){

        new_view_count = parseInt(this.sessionStorage.getItem(page + "-view-count")) + 1;
        this.sessionStorage.setItem(page + "-view-count", new_view_count);
        view_count.textContent = new_view_count;
    }

    else{
        new_view_count = parseInt(view_count.textContent) + 1;
        view_count.textContent = new_view_count;
        this.sessionStorage.setItem(page + "-view-count", new_view_count);
    }
})