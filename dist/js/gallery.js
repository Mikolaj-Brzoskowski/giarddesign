let gallery = document.getElementById("gallery");

let button = document.getElementById("close-gallery");

let body = document.body;

function openGallery(number) {
    document.getElementById(number).click();
    gallery.style.display = "block";
    body.style.overflow = "hidden"
}

button.onclick = function() {
    gallery.style.display = "none";
    body.style.overflow = "auto"
}

