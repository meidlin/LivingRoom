$( document ).ready( function(){
  console.log('Samantha');

(function($) {
  var slider = $('div.slider').css('overflow', 'hidden'),
    imgs = slider.find('movie'),
    imgWidth = '368px', //hard coded width of scroll 
    imgsLen = imgs.length,
    current = 1,
    totalImgsWidth = imgsLen * imgWidth;

$('#slider-nav').show().find('button').on('click', function(){
  var direction = $(this).data('dir');
      loc = imgWidth;


  // update current value

  if ( direction === 'next') {
    current += 1; //2
  } else {
      current -= 1; //0
  }

  if ( current === 0) {
      current = imgsLen;
      loc = totalImgsWidth - imgWidth;
      direction = 'next';
  } else if ( current -1 === imgsLen) {
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