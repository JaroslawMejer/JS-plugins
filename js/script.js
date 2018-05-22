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

// GOOGLE MAPS

window.initMap = function() {
        var greenLand = {lat: 71.706936, lng: -42.604303000000016};
        var puszczaPoland = {lat: 52.7228852, lng: 23.655567399999995};
        var miamiBeach = {lat: 25.790654, lng: -80.1300455};
        var wroclawCity = {lat: 51.1078852, lng: 17.03853760000004};
        var iceland = {lat: 64.963051, lng: -19.020835000000034};
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: greenLand
        });

        var contentString = '<div id="content">'+
            '<h1 id="firstHeading" class="firstHeading">Greenland</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Greenland</b>, amazing sky <b>full of colors</b>.'+
            '</div>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: greenLand,
          map: map,
          title: 'Greenland'
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }