// init Masonry
var $grid = $('.grid').masonry({
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    itemSelector: '.grid-item',
    transitionDuration: '0.2s',
    percentPosition: true
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
