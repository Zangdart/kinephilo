function adjustMainBgHeight() {
    var imgWidth = 1200;
    var imgHeight = 620;
    var img = $('.tm-main-bg');
    var currentWidth = img.width();
    var currentHeight = (currentWidth * imgHeight) / imgWidth;
    
    img.css('height', currentHeight);
}

// // switch contact image size
// $(dc).on('load', function() {
//   if ($(window).width() < 500) {
//     $('#deux').addClass('col-lg-12');
//     $('#deux').removeClass('col-lg-6');
//   }
// })

// var window_weight = $(screen).width();
// if (window_weight <= 600) {
//   $('#deux').addClass('col-lg-12');
//   $('#deux').removeClass('col-lg-6');
// }

// function resize() {
//   if ($(window).width() < 500) {
//     $('#deux').removeClass('col-lg-6').addClass('col-lg-12');
//   }
// }

// //watch window resize
// $(window).on('resize', function() {
//   resize()
// });


$(document).ready(function(){
    adjustMainBgHeight();
    
    $(window).resize(function() {
        adjustMainBgHeight();
    });
    
    // Mobile menu
    $('.tm-mobile-menu').click(function() {
      $('.tm-nav').toggleClass('show');
    });
    
    if($('.tm-carousel').length) {
      // Carousel
      $('.tm-carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });   
    }  
});