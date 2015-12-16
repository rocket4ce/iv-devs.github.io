/* ================================
===  BACKGROUND SLIDER        ====
================================= */
$.vegas('slideshow', {
  delay:7000,
  backgrounds:[
    { src:'images/backgrounds/bg1.jpg', fade:1000 },
    { src:'images/backgrounds/bg2.jpg', fade:1000 },
    { src:'images/backgrounds/bg3.jpg', fade:1000 }
  ]
});
      
   
/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
})


/* =================================
===  Bootstrap Fix              ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

/* =================================
===  STICKY NAV                 ====
=================================== */

$(document).ready(function() {
  $('.main-nav-list').onePageNav({
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ':not(.external)'
  });
  
  // Sticky Header - http://jqueryfordesigners.com/fixed-floating-elements/         
  var top = $('#main-nav').offset().top - parseFloat($('#main-nav').css('margin-top').replace(/auto/, 0));
  
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
    
    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#main-nav').addClass('fixed');
    } else {
      // otherwise remove it
      $('#main-nav').removeClass('fixed');
    }
  });
  
});

/*---------------------------------------*/
    /*  SMOOTH SCROLL FRO INTERNAL #HASH LINKS
/*---------------------------------------*/
$(document).ready(function(){
    $('a[href^="#"].inpage-scroll, .inpage-scroll a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);
        $('.main-navigation a[href="' + target + '"]').addClass('active');
        $('.main-navigation a:not([href="' + target + '"])').removeClass('active');
        $('html, body').stop().animate({
            'scrollTop': ($target.offset()) ? $target.offset().top : 0
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

/*=================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll',function (event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });   


/* =================================
===  CONTACT FORM          ====
=================================== */

$("#contact-form").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: dataString,
            success: function () {
                $('.success').fadeIn(1000);
                $('.error').fadeOut(500);
            }
        });
    } else {
        $('.error').fadeIn(1000);
        $('.success').fadeOut(500);
    }

    return false;
});


/* ================================
===  PROJECT LOADING           ====
================================= */

jQuery(document).ready(function($) {
    $('.more').live('click', function(event) {
        event.preventDefault();

        var href = $(this).attr('href') + ' .single-project',
            portfolioList = $('#portfolio-list'),
            content = $('#loaded-content');

        portfolioList.animate({'marginLeft':'-120%'},{duration:400,queue:false});
        portfolioList.fadeOut(400);
        setTimeout(function(){ $('#loader').show(); },400);
        setTimeout(function(){
            content.load(href, function() {
                $('#loaded-content meta').remove();
                $('#loader').hide();
                content.fadeIn(600);
                $('#back-button').fadeIn(600);
            });
        },800);

    });

    $('#back-button').on('click', function(event) {
        event.preventDefault();

        var portfolioList = $('#portfolio-list')
            content = $('#loaded-content');

        content.fadeOut(400);
        $('#back-button').fadeOut(400);
        setTimeout(function(){
            portfolioList.animate({'marginLeft':'0'},{duration:400,queue:false});
            portfolioList.fadeIn(600);
        },800);
    });
});

/* ================================
===  PARALLAX                  ====
================================= */
$(document).ready(function(){
  var $window = $(window);
  $('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function(){
    var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '50% '+ yPos + 'px';
      $bgobj.css({ 
        backgroundPosition: coords 
      });
    });
  });
});



/* =================================
===  WOW ANIMATION             ====
=================================== */

new WOW().init();



