$( document ).ready( function(){
  console.log('Samantha');

});

(function($) {
  var slider = $('div.slider').css('overflow', 'hidden'),
    imgs = slider.find('movie'),
    imgWidth = imgs[0].width,
    imgsLen = imgs.length,
    current = 1,
    totalImgsWidth = imgsLen * imgWidth;

$('#slider-nav').show().find('button').on('click', function(){
  var direction = $(this).data('dir');

  // update current value

  if ( direction === 'next') {
    current += 1; //2
  } else {
      current -=1; //0
  }

  if ( current === 0) {
      current = imgsLen;
      direction === 'next'; 
  } else if ( current -1 === imgsLen) {
      current = 1;
  }

  transition();
});

function transition( container ) {
  
}

})(jQuery);