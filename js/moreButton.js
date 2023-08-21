let images = document.getElementById('images');
let moreButton = document.getElementById('button')
let moreImages = document.getElementById('more-images');
let hidden = document.getElementById('hidden');

function showMoreimages(){
    images.setAttribute('class', 'grid')
    moreButton.style.display = 'none'
    moreImages.setAttribute('class', 'grid')
    $("#hidden").contents().unwrap();
    $('.grid').masonry({
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        itemSelector: '.grid-item',
        transitionDuration: '0.2s',
        percentPosition: true
    });
}