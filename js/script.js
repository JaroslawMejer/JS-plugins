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

var resetButton = document.getElementById('reset-button')

resetButton.addEventListener('click', function(){
  flkty.select (0)
})



// GOOGLE MAPS

window.initMap = function() {
        var greenLand = {lat: 71.706936, lng: -42.604303000000016};
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: greenLand
        });

        var markers=[];

        for (var i = 0; i < SlideList.length; i++) {
            markers[i] = new google.maps.Marker({
              position: SlideList[i].coords,
              map: map,
              title: SlideList[i].title
            })
            markers[i].index = i;

          google.maps.event.addListener(markers[i], 'click', function(){
            flkty.select (this.index)
            console.log(this.index)
          })
        }
        flkty.on('change', function(index){
          console.log('Flickity change ' + index)
          map.panTo(SlideList[index].coords)
          map.setZoom(7);
        })
      }

