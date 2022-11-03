"use strict";



// Banner rev Slider 
function mainBanner() {
    if ($("#main_slider").length) {
        $("#main_slider").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            loops: false,
            delay: 7000,
            navigation: {
                arrows: {
                    style: "hephaistos",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: -51
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: -51
                    }
                },
            },

            gridwidth: [1170, 970, 770, 580],
            gridheight: [880, 880, 600, 600],
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                disableFocusListener: false,
            }
        });
    };
}



// Fancybox Video
function FancypopUpVideo() {
    if ($(".fancy_video").length) {
        $(".fancy_video").fancybox({
            maxWidth: 1080,
            maxHeight: 1080,
            fitToView: false,
            width: '85%',
            height: '85%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none'
        });
    };
}

// Fancybox 
function FancypopUp() {
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                overlay: {
                    css: {
                        'background': 'rgba(0, 0, 0, 0.6)'
                    }
                }
            }
        });
    };
}

function countryInfo() {
    if ($('.area_select').length) {
        $('.area_select').change(function() {
            var val = $(this).val();
            if (val) {
                $('.state:not(#value' + val + ')').slideUp();
                $('#value' + val).slideDown();
            } else {
                $('.state').slideDown();
            }
        });
    }
}



// placeholder remove
function removePlaceholder() {
    if ($("input,textarea").length) {
        $("input,textarea").each(
            function() {
                $(this).data('holder', $(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder', '');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder', $(this).data('holder'));
                });

            });
    }
}



// cart item Dismiss
function cartItemDismiss() {
    if ($('.cart_option').length) {
        $('.cart_list>ul>li').append(function() {
            return '<i class="fa fa-times-circle" aria-hidden="true"></i>';
        });
        $('.cart_list>ul>li .fa-times-circle').on('click', function() {
            $(this).parent('li').fadeOut(300);
        });
    };
}

// Cart Open function 
function cartOpen() {
    if ($('#cartDropdown').length) {
        $("#cartDropdown").on('click', function() {
            $(".cart_list").slideToggle(300)
        })
    }
}


// Counter function
function CounterNumberChanger() {
    var timer = $('.timer');
    if (timer.length) {
        timer.appear(function() {
            timer.countTo();
        })
    }
}



// Partner Logo Footer 
function partnersLogo() {
    if ($('#partner_logo').length) {
        $('#partner_logo').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplaySpeed: 1000,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                550: {
                    items: 3
                },
                1001: {
                    items: 4
                }
            }
        })
    }
}


// Close suddess Alret
function closeSuccessAlert() {
    if ($('.closeAlert').length) {
        $(".closeAlert").on('click', function() {
            $(".alert_wrapper").fadeOut();
        });
        $(".closeAlert").on('click', function() {
            $(".alert_wrapper").fadeOut();
        })
    }
}


// Share item Show
function blogShareSlide() {
    if ($('.share-content').length) {
        $('.share_box button').on('click', function() {
            $(this).parent().find('.share-content').toggleClass('share-show');
        });
    };
}



// WOW animation 
function wowAnimation() {
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 80, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        });
        wow.init();
    }
}


function swithcerMenu () {
  if ($('.switch_menu').length) {

    $('.switch_btn button').on('click', function(){
      $('.switch_menu').toggle(300)
    });

    $("#myonoffswitch").on('click', function(){
        $(".main_menu").toggleClass("menu_fixed");
        $(".main_menu").removeClass("fixed");
    });

    $("#boxed").on('click', function(){
      $(".layout_changer").addClass("home_boxed");
    });
    $("#full_width").on('click', function(){
      $(".layout_changer").removeClass("home_boxed");
    });
    $(".bg1").on('click', function(){
      $(".home_boxed").addClass("bg1");
      $(".home_boxed").removeClass("bg2 bg3 bg4");
    });
    $(".bg2").on('click', function(){
      $(".home_boxed").addClass("bg2");
      $(".home_boxed").removeClass("bg1 bg3 bg4");
    });
    $(".bg3").on('click', function(){
      $(".home_boxed").addClass("bg3");
      $(".home_boxed").removeClass("bg2 bg1 bg4");
    });
    $(".bg4").on('click', function(){
      $(".home_boxed").addClass("bg4");
      $(".home_boxed").removeClass("bg2 bg3 bg1");
    });

    $('#styleOptions').styleSwitcher({
        hasPreview: true,
        fullPath: 'css/custom/',
         cookie: {
          expires: 30,
          isManagingLoad: true
      }
    });

  };
}




// DOM ready function
jQuery(document).on('ready', function() {
    (function($) {
        mainBanner();
        countryInfo();
        removePlaceholder();
        cartItemDismiss();
        cartOpen();
        CounterNumberChanger();
        partnersLogo();
        closeSuccessAlert();
        blogShareSlide();
        wowAnimation();
        FancypopUpVideo();
        FancypopUp();
        swithcerMenu ();
    })(jQuery);
});
