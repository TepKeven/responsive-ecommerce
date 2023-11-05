window.addEventListener("load", function () {

    var select_profile_photo = document.getElementById("select-profile-photo");
    var profile_photo = document.getElementById("profile-photo");

    select_profile_photo.onchange = function () {
        var photo = this.files[0];
        profile_photo.src = URL.createObjectURL(photo);
    }
})