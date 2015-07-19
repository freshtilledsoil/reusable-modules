;(function($, w, doc) {

  // Enable strict mode
  "use strict";

  // Local object for method references
  var Carousel = {};

  // Namespace
  Carousel.ns = "Carousel";

  // Start defining methods here
  Carousel.init = function() {

    $('.tile-group').each(function() {

      var $carousel = $(this);
      var slideCount = $carousel.find('.tile').length;

      var defaults = {
        arrows: true,
        autoplay: false,
        autoplaySpeed: 1000,
        centerMode: true,
        centerPadding: '0px',
        dots: true,
        fade: false,
        initialSlide: 0,
        mobileFirst: false,
        responsive: null,
        speed: 300,
        variableWidth: false,
        vertical: false,

        customPaging: function(slider, i) {
          return '<button type="button" data-role="none">' + (i + 1) + '</button>';
        }
      };

      var options = $.extend({}, defaults, $carousel.data());

      if (slideCount > 1) {
        $carousel.slick(options);
      }
    });

  };

  // Start the application
  Carousel.init();

}(jQuery, this, this.document));
