$(document).ready(function(){
 $('.header').height($(window).height());

 // Add shadow to navbar on scroll
 $(window).scroll(function() {
   if ($(this).scrollTop() > 50) {
     $('.navbar').addClass('scrolled');
   } else {
     $('.navbar').removeClass('scrolled');
   }
 });
})

// Smooth scroll with offset for sticky navbar
$(".navbar a").click(function(e){
  e.preventDefault();
  var target = $(this).data('value');
  if (target) {
    var offset = 70; // Height of navbar
    $("body,html").animate({
      scrollTop: $("#" + target).offset().top - offset
    }, 1000);
  }
})