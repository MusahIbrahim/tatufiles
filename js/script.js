//Owl Carousel Initialization

$('.home-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:true,
    autoplayHoverPause:true,
    items:1,
    animateOut:'fadeOut',
    animateIn:'fadeIn',
    navText:["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false
        }
    }
})


//initialization data aos 

AOS.init({
    duration:1000,
    delay:400
});




/* our faculties owl carousel */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:3
      }
    }
  })

/* end of our faculties owl carousel */