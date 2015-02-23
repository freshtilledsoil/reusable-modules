;(function($, w, doc){

  // Enable strict mode
  "use strict";

  // Local object for method references
  var Carousel = {};

  // Namespace
  Carousel.ns = "Carousel";

  // Start defining methods here
  Carousel.init = function() {
    
    
    
    $('.tile-group').each(function(){

      var carousel = $(this);
      var slidesToShow = carousel.attr('data-slidesToShow');
      var slideCount = carousel.find('.tile').length;

      if(slideCount > 1) {

        carousel.slick({
          autoplay: false,
          autoplaySpeed: 1000,
          centerMode: true,
          centerPadding: '0px',
          dots: true,
          fade: false,
          arrows: true,
          mobileFirst: false,
          initialSlide: 0,
          responsive: null,
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToShow,
          speed: 300,
          variableWidth: false,
          vertical: false,
          customPaging: function(slider, i) {
              return '<button type="button" data-role="none">' + (i + 1) + '</button>';
          }
        });

      } // if count

    });

  };

  // Start the application
  Carousel.init();

} ( jQuery, this, this.document ));