$(document).ready(function(){
   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]

   });

   $('.slider').slick({
autoplay:true,
      slidesToShow:1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn",
    })
    


   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })

   function welcome(){
      window.open("/")

   }

/*
   var slide = document.getElementById("product");
   var btn1 = document.getElementById('btn1');
   var btn2 = document.getElementById('btn2');
   var btn3 = document.getElementById('btn3');


   btn1.onclick = function () {
       slide.style.transform = "translateY(-4vh)";
       btn1.classList.add('activebtn');
       btn2.classList.remove('activebtn');
       btn3.classList.remove('activebtn');

   };
   btn2.onclick = function () {
       slide.style.transform = "translateY(-72vh)";
       btn1.classList.remove('activebtn');
       btn2.classList.add('activebtn');
       btn3.classList.remove('activebtn');

   };

   btn3.onclick = function () {
       slide.style.transform = "translateY(-144vh)";
       btn1.classList.remove('activebtn');
       btn2.classList.remove('activebtn');
       btn3.classList.add('activebtn');

   };

*/

});