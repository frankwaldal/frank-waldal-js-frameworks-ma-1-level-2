$(document).ready(function() {
  $('.imageWrapper img').click(galleryHandler);
});

let indexOfOpenImage = 0;

// Function to open clicked image
function galleryHandler() {
  const thumbnailImages = $('.imageWrapper img').toArray();
  indexOfOpenImage = thumbnailImages.findIndex(element => element === $(this)[0]);

  $('body').append('<div id="openedImageWrapper" />');
  $(this).clone().addClass('openedImage').appendTo('#openedImageWrapper');
  if ($(this).next('.imageText').length > 0) {
    $(this).next('.imageText').addClass('openedImageText');
  }
  $('#openedImageWrapper').append('<div id="shadow" />');
  $('#openedImageWrapper').append('<button id="back"><</button>'+'<button id="next">></button>');

  $('.openedImage').animate({maxWidth: '100%', maxHeight: '100%'}, openedImageGalleryHandler(thumbnailImages));
}

// Function to handle events when image is open
function openedImageGalleryHandler(thumbnailImages) {
  // Go back one image
  $('#back').click(function() {
    $('.openedImageText').removeClass('openedImageText');
    $('.openedImage').animate({left: '-200vw'}, function() {
      $('.openedImage').remove();
      if (indexOfOpenImage === 0) {
        indexOfOpenImage = thumbnailImages.length - 1;
        $('.imageWrapper img').eq(indexOfOpenImage).clone().addClass('openedImage').appendTo('#openedImageWrapper');
        if ($('.imageWrapper img').eq(indexOfOpenImage).next('.imageText').length > 0) {
          $('.imageWrapper img').eq(indexOfOpenImage).next('.imageText').addClass('openedImageText');
        }
        $('.openedImage').css({ "max-width": "100%", "max-height": "100%", "left": "100vw" }).animate({left: '0'});
      } else {
        indexOfOpenImage--;
        $('.imageWrapper img').eq(indexOfOpenImage).clone().addClass('openedImage').appendTo('#openedImageWrapper');
        if ($('.imageWrapper img').eq(indexOfOpenImage).next('.imageText').length > 0) {
          $('.imageWrapper img').eq(indexOfOpenImage).next('.imageText').addClass('openedImageText');
        }
        $('.openedImage').css({ "max-width": "100%", "max-height": "100%", "left": "100vw" }).animate({left: '0'});
      }
    });
  });
  // Go forward one image
  $('#next').click(function() {
    $('.openedImageText').removeClass('openedImageText');
    $('.openedImage').animate({left: '100vw'}, function() {
      $('.openedImage').remove();
      if (indexOfOpenImage + 1 === thumbnailImages.length) {
        indexOfOpenImage = 0;
        $('.imageWrapper img').eq(indexOfOpenImage).clone().addClass('openedImage').appendTo('#openedImageWrapper');
        if ($('.imageWrapper img').eq(indexOfOpenImage).next('.imageText').length > 0) {
          $('.imageWrapper img').eq(indexOfOpenImage).next('.imageText').addClass('openedImageText');
        }
        $('.openedImage').css({ "max-width": "100%", "max-height": "100%", "left": "-200vw" }).animate({left: '0'});
      } else {
        indexOfOpenImage++;
        $('.imageWrapper img').eq(indexOfOpenImage).clone().addClass('openedImage').appendTo('#openedImageWrapper');
        if ($('.imageWrapper img').eq(indexOfOpenImage).next('.imageText').length > 0) {
          $('.imageWrapper img').eq(indexOfOpenImage).next('.imageText').addClass('openedImageText');
        }
        $('.openedImage').css({ "max-width": "100%", "max-height": "100%", "left": "-200vw" }).animate({left: '0'});
      }
    });
  });
  // Close zoomed-in image
  $('#openedImageWrapper').click(function() {
    $('.openedImage').animate({width: '0', height: '0'}, function() {
      $('#openedImageWrapper').remove();
      $('.openedImageText').removeClass('openedImageText');
    });
  });
}
