$(document).ready(function () {
   console.log('All assets are loaded');
   $('.tab1').on('click', function () {
      $('.collection_1').fadeIn();
      $('.collection_2').hide();
      $('.collection_3').hide();
      
   });

   $('.tab2').on('click', function () {
      $('.collection_2').fadeIn();
      $('.collection_1').hide();
      $('.collection_3').hide();
   });

   $('.tab3').on('click', function () {
      $('.collection_3').fadeIn();
      $('.collection_1').hide();
      $('.collection_2').hide();
   });

   $('.owl-carousel.owl-products-carousel-slider2').owlCarousel({
      loop:true,
      center:false,
      mouseDrag:true,
      touchDrag:true,
      navText:["<span><i class='fa fa-chevron-left'></i></span>","<span><i class='fa fa-chevron-right'></i></span>"],
      margin:10,
      nav:true,
      dots:true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
            items:4
          }
      }
  });
});
