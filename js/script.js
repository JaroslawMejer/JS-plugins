'use strict';

var templateSlides = document.getElementById('template-slides').innerHTML;
Mustache.parse(templateSlides);

var listSlides = '';

for (var i = 0; i < SlideList.length; i++) {
	console.log(SlideList);
	listSlides += Mustache.render(templateSlides, SlideList[i]);
}

var slidesContainer = document.getElementById('slides-container')

slidesContainer.insertAdjacentHTML('beforeend', listSlides)

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});