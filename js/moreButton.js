let images = document.getElementById('images');
let moreButton = document.getElementById('more-button')
let moreImages = document.getElementById('more-images');

function showMoreimages(){
    images.setAttribute('class', 'grid')
    moreButton.style.display = 'none'
    moreImages.setAttribute('class', 'grid')
    $('.grid').masonry({
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        itemSelector: '.grid-item',
        transitionDuration: '0.2s',
        percentPosition: true
    });
}