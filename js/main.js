//import simpleParallax from 'simple-parallax-js';


$(function () {
   //$('.questions__item-title').on('click', function () {
   //   $('.questions__item').removeClass('questions__item--active');
   //   $(this).parent().addClass('questions__item--active');
   //});

   /*  $('.house__slider').slick({
        //dots: true,
        //autoplay: true,
        //autoplaySpeed: 1500

     });
     $('.yard__slider').slick({
        /*dots: true,*/
   //autoplay: true,
   //autoplaySpeed: 1500
   /*  });
     $('.outside__slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [{
           breakpoint: 900,
           settings: {
              arrows: false,
              dots: true,
           }
        }, ]
     });*/

   jQuery("a.scrollto").click(function () {
      elementClick = jQuery(this).attr("href")
      destination = jQuery(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
         scrollTop: destination
      }, 1100);
      return false;
   });

   $('.menu__btn').on('click', function () {
      $('.menu__btn').toggleClass('menu__btn--active');
      $('.menu__list').toggleClass('menu__list--active');

   });


   $('.menu__list-link').on('click', function () {
      $('.menu__btn').removeClass('menu__btn--active');
      $('.menu__list').removeClass('menu__list--active');
   });

});
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);

   function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeigh / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            animItem.classList.remove('_active');
         }
      }
   }

   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
         top: rect.top + scrollTop,
         left: rect.left + scrollLeft
      }
   }
   setTimeout(() => {
      animOnScroll();

   }, 300);
}




var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
var scene = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene);
var scene = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene);
var scene = document.getElementById('scene4');
var parallaxInstance = new Parallax(scene);
var scene = document.getElementById('scene5');
var parallaxInstance = new Parallax(scene);
var scene = document.getElementById('scene6');
var parallaxInstance = new Parallax(scene);
var scene = document.getElementById('scene7');
var parallaxInstance = new Parallax(scene);
var scene = document.getElementById('scene8');
var parallaxInstance = new Parallax(scene);
var scene = document.getElementById('scene9');
var parallaxInstance = new Parallax(scene);




var image = document.getElementsByClassName('.paralax');
new simpleParallax(image, {
   delay: 0.5,
   orientation: 'left',
   scale: 1.80,
   overflow: true
});
const images = document.querySelectorAll('img');
new simpleParallax(image, {
   delay: 0.5,
   orientation: 'left',
   scale: 1.80,
   overflow: true
});