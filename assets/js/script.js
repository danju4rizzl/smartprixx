$(document).ready(function(){
  AOS.init({ disable: 'mobile' });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#navSub').addClass('fixed-top');
      $('#navSubLogo').removeClass('navBarSub__logo');
      $('#navSubLogo').addClass('navBarSub__logo--mod');
    }
    else {
      $('#navSub').removeClass('fixed-top');
      $('#navSubLogo').removeClass('navBarSub__logo--mod');
      $('#navSubLogo').addClass('navBarSub__logo');
    }

  });

});


//map
jQuery(function($) {
  $('#my-fast-map a').on('click', function(e) {
    e.preventDefault();
    map = $(this).parent();

    iframe_src = map.data('iframe-src');
    iframe_width = map.data('iframe-width');
    iframe_height = map.data('iframe-height');

    map.html('<iframe src="' + iframe_src + '" width="' + iframe_width + '" height="' + iframe_height + '" allowfullscreen></iframe>');

    return false;
  });
});