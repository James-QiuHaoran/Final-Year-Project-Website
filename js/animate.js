function onViewport(el, elClass, offset, callback) {
  /*** Based on http://ejohn.org/blog/learning-from-twitter/ ***/
  var didScroll = false;
  var this_top;
  var height;
  var top;
  
  if(!offset) { var offset = 0; }
 
  $(window).scroll(function() {
      didScroll = true;
  });
 
  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      top = $(this).scrollTop();
 
      $(el).each(function(i){
        this_top = $(this).offset().top - offset;
        height   = $(this).height();
 
        // Scrolled within current section
        if (top >= this_top && !$(this).hasClass(elClass)) {
          $(this).addClass(elClass);
 
          if (typeof callback == "function") callback(el);
        }
      });
    }
  }, 100);
}

// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// a = document.querySelectorAll(".team-contact");
// b = document.querySelectorAll(".team-contact-mid");
// for (var i = 0; i < a.length; i++) {
//   if (isElementInViewport(a[i])) {
//     setTimeout(1000);
//     $('.team-contact').show();
//     // $('.team-contact-mid').show();
//     $('.team-contact').addClass('animated bounceInLeft');
//     // $('.team-contact-mid').addClass('animated bounceInUp');
//   }
// }

onViewport("#contact", "active", 400, function() {
  $('.team-contact').show();
  $('.team-contact-mid').show();
  $('.team-contact').addClass('animated bounceInLeft');
  $('.team-contact-mid').addClass('animated bounceInUp');
  });

