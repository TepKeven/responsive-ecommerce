window.addEventListener("load",function(){

    var profile_input = document.getElementById("profile-input");
    var profile_image = document.getElementById("profile-image")
    profile_input.addEventListener("change",function(){
        var profile = this.files[0];
        profile_image.src = URL.createObjectURL(profile)
    })
})