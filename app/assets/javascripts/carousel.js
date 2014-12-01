$( document ).ready( function(){
  console.log('Samantha');

(function($) {
  var slider = $('div.slider').css('overflow', 'hidden'),
    imgs = slider.find('movie'),
    imgWidth = '500px', //hard coded width of scroll 
    imgsLen = imgs.length,
    current = 1, //keep track of where user is 
    totalImgsWidth = imgsLen * imgWidth;

$('#slider-nav').show().find('button').on('click', function(){
  var direction = $(this).data('dir'); //get data-dir attribute
      loc = imgWidth; // 368px


  // update current value
 
  if ( direction === 'next') {
    current += 1; //2
  } else {
    current -= 1;
  
  }

  if ( current === 0) {
    current = imgsLen;
    direction = 'next';
  } else if ( current -1 === imgsLen ) {
      current = 1;
      loc = 0;
  }

  transition(slider, loc , direction);
});

function transition( container, loc, direction ) {
  var unit;

  if (direction && loc !== 0) {
    unit = (direction === 'next') ? '-=' : '+=';
  }

  container.animate({
    'margin-left': unit ? ( unit + loc) : loc
  });
  
}

})(jQuery);

});

