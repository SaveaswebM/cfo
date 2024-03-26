(function($) {
  "use strict";

  /*=============================================


/*===========================================
	=    		Mobile Menu			      =
=============================================*/
  //SubMenu Dropdown Toggle

  /*=============================================
	=           Data Background             =
=============================================*/

  /*===========================================
	=     Menu sticky & Scroll to top      =
=============================================*/
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $(".scroll-to-target").removeClass("open");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $(".scroll-to-target").addClass("open");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  /*=============================================
	=    		 Scroll Up  	         =
=============================================*/
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function() {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top
        },
        1000
      );
    });
  }

  /*=============================================
	=            Header Search            =
=============================================*/
  $(".search-open-btn").on("click", function() {
    $(".search__popup").addClass("search-opened");
    $(".search-popup-overlay").addClass("search-popup-overlay-open");
  });
  $(".search-close-btn").on("click", function() {
    $(".search__popup").removeClass("search-opened");
    $(".search-popup-overlay").removeClass("search-popup-overlay-open");
  });

  /*=============================================
=     Offcanvas Menu      =
=============================================*/

  /*=============================================
	=          brand active              =
=============================================*/
  var swiper2 = new Swiper(".slider__active", {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 6000
    }
  });

  var swiper3 = new Swiper(".slider_baner__active", {
    spaceBetween: 0,
    // effect: "fade",
    loop: true,
    autoplay: {
      delay: 6000
    },
    // Navigation arrows
    navigation: {
      nextEl: ".button-swiper-next",
      prevEl: ".button-swiper-prev"
    },
    pagination: {
      el: ".swiper-pagination-testimonials",
      clickable: true
    }
  });

  var swiper4 = new Swiper(".slider_partners__active", {
    spaceBetween: 0,
    slidesPerView: "auto",

    // effect: "fade",
    loop: true,
    autoplay: {
      delay: 6000
    },
    // Navigation arrows
    navigation: {
      nextEl: ".button-swiper-next",
      prevEl: ".button-swiper-prev"
    }
  });

  /*=============================================
	=          brand active              =
=============================================*/
  var slider = new Swiper(".brand-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000
    },
    breakpoints: {
      "1200": {
        slidesPerView: 6
      },
      "992": {
        slidesPerView: 5
      },
      "768": {
        slidesPerView: 4
      },
      "576": {
        slidesPerView: 3
      },
      "0": {
        slidesPerView: 2
      }
    }
  });

  /*=============================================
	=          testimonials active              =
=============================================*/
  var slider = new Swiper(".testiminials-active", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
      "1200": {
        slidesPerView: 3
      },
      "992": {
        slidesPerView: 3
      },
      "768": {
        slidesPerView: 2
      },
      "576": {
        slidesPerView: 1
      },
      "0": {
        slidesPerView: 1
      }
    }
  });

  var slider_test = new Swiper(".testiminials-active-2", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".button-swiper-testimonial-next",
      prevEl: ".button-swiper-testimonial-prev"
    },
    breakpoints: {
      "1200": {
        slidesPerView: 2
      },
      "992": {
        slidesPerView: 2
      },
      "768": {
        slidesPerView: 1
      },
      "576": {
        slidesPerView: 1
      },
      "0": {
        slidesPerView: 1
      }
    }
  });

  /*=============================================
	=          project active              =
=============================================*/
  var swiper2 = new Swiper(".project-active", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 6000
    },
    thumbs: {
      swiper: swiper
    },
    // Navigation arrows
    navigation: {
      nextEl: ".project-button-next",
      prevEl: ".project-button-prev"
    }
  });

  /*=============================================
	=          brand active              =
=============================================*/
  var slider = new Swiper(".project-active-two", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
      "1200": {
        slidesPerView: 4
      },
      "992": {
        slidesPerView: 3
      },
      "768": {
        slidesPerView: 2
      },
      "576": {
        slidesPerView: 2
      },
      "0": {
        slidesPerView: 1
      }
    }
  });

  /*=============================================
	=          testimonial active              =
=============================================*/
  var swiper = new Swiper(".testimonial-nav", {
    spaceBetween: 0,
    slidesPerView: 4
  });
  var swiper2 = new Swiper(".testimonial-active", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 6000
    },
    thumbs: {
      swiper: swiper
    },
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: !0
    }
  });

  /*=============================================
	=          testimonial active two             =
=============================================*/
  var swiper3 = new Swiper(".testimonial-active-two", {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 6000
    },
    // Navigation arrows
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev"
    }
  });

  /*=============================================
	=          testimonial active              =
=============================================*/
  var swiper = new Swiper(".testimonial__nav-three", {
    spaceBetween: 0,
    slidesPerView: 4
  });
  var swiper2 = new Swiper(".testimonial-active-three", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 6000
    },
    thumbs: {
      swiper: swiper
    },
    // Navigation arrows
    navigation: {
      nextEl: ".testimonial-two-button-next",
      prevEl: ".testimonial-two-button-prev"
    }
  });

  /*=============================================
	=        Team Social Active 	       =
=============================================*/
  $(".social-toggle-icon").on("click", function() {
    $(this).parent().find("ul").slideToggle(400);
    $(this).find("i").toggleClass("fa-times");
    return false;
  });

  /*=============================================
	=    		pricing Active  	       =
=============================================*/
  $(".pricing__tab-switcher, .pricing__tab-btn").on("click", function() {
    $(".pricing__tab-switcher, .pricing__tab-btn").toggleClass(
      "active"
    ), $(".pricing__tab").toggleClass("seleceted"), $(".pricing__price").toggleClass("change-subs-duration");
  });

  /*=============================================
	=    		Odometer Active  	       =
=============================================*/
  $(".odometer").appear(function(e) {
    var odo = $(".odometer");
    odo.each(function() {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  /*=============================================
	=    		Magnific Popup		      =
=============================================*/
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe"
  });

  /*=============================================
	=    		 Wow Active  	         =
=============================================*/

  /*=============================================
	=           Aos Active       =
=============================================*/
  function aosAnimation() {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: true,
      disable: "mobile"
    });
  }

  $(".view-password").on("click", function() {
    var _parent = $(this).parent("div");
    var _input = _parent.find("input");
    if (_input.attr("type") == "password") {
      _input.attr("type", "text");
    } else {
      _input.attr("type", "password");
    }
  });

  $(window)
    .resize(function() {
      var _container = $("main .container");
      var _window_w = $(window).width();
      var _container_w = _container.width();
      var _space = (_window_w - _container_w) / 2 - 15;
      var _form_quote = $(".slider__area-home8 .box-form-quote");
      _form_quote.css("right", "" + _space + "px");
    })
    .resize();
})(jQuery);
