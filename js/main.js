(function() {


var mobilemenu = document.querySelector(".header__nav");
var hamburger = document.querySelector(".header__hamburger");
var header = document.querySelector(".header");

hamburger.addEventListener("click", function(event) {
    event.preventDefault();
    mobilemenu.classList.toggle("header__nav--is-active");
});

 hamburger.addEventListener("click", function(event) {
    event.preventDefault();
    header.classList.toggle("header--is-active");
});

hamburger.addEventListener("click", function(event) {
    event.preventDefault();
    hamburger.classList.toggle("header__hamburger--is-active");
});



})();

var map;
var markers = [];

function initMap() {

var pinIcon = new google.maps.MarkerImage('img/map-pointer.png');

  map = new google.maps.Map(document.getElementById('js-map'), {
    center: {lat: 59.936468, lng: 30.321086},
    zoom: 15
  });

  addMarker();

function addMarker() {
      markers.push(new google.maps.Marker({
        position: {lat: 59.936468, lng: 30.321086},
        raiseOnDrag: false,
        icon: pinIcon,
        map: map,
        draggable: false
      }));
    }

}

jQuery(document).ready(function(){
  $('.reviews-slider__wrap').slick({
    autoplay: true,
    dots: false,
    arrows: true,
    prevArrow: '<i class="reviews-slider__arrow reviews-slider__arrow1"></i>',
    nextArrow: '<i class="reviews-slider__arrow reviews-slider__arrow2"></i>',
    responsive: [{
            breakpoint: 1200,
            settings: {
                dots: true
            }
        }]
    });
    $('.price__wrap').slick({
        dots: true,
        centerMode: true,
        centerPadding: '20px',
        initialSlide: 1
    });
});

