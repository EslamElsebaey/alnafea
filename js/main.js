$(window).on("load", function () {
  $(".preloader-container").fadeOut();

  // main swiper

  const mainSwiper = new Swiper(".mainBanner .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 1000,
    navigation: {
      nextEl: " .mainBanner .swiper-button-next",
      prevEl: ".mainBanner .swiper-button-prev",
    },

    pagination: {
      el: ".mainBanner .swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  // News Swiper
  const newsSwiper = new Swiper(".news .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 1000,
    navigation: {
      nextEl: " .news .swiper-button-next",
      prevEl: ".news .swiper-button-prev",
    },
    pagination: {
      el: ".news .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  });

  // clients swiper

  const clientSwiper = new Swiper(".clients .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 1000,
    navigation: {
      nextEl: " .clients .swiper-button-next",
      prevEl: ".clients .swiper-button-prev",
    },

    pagination: {
      el: ".clients .swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      350: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1100: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });

  // products swiper

  const productSwiper = new Swiper(".products .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 1000,
    navigation: {
      nextEl: " .products .swiper-button-next",
      prevEl: ".products .swiper-button-prev",
    },

    pagination: {
      el: ".products .swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  // single product  swiper

  const singleProductSwiper = new Swiper(".single-product .swiper", {
    loop: true,
    draggable: true,
    autoplay: true,
    speed: 1000,
    navigation: {
      nextEl: " .single-product .swiper-button-next",
      prevEl: ".single-product .swiper-button-prev",
    },

    pagination: {
      el: ".single-product .swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});

$(document).ready(function () {
  // open and close sideBar

  $(".open-nav-btn").click(function () {
    $(".toTop").hide();
    $(".navigation").addClass("open-nav");
    $("body").addClass("overflow-hidden");
  });

  $(".close-nav-btn").click(function () {
    $(".toTop").show();
    $(".navigation").removeClass("open-nav");
    $("body").removeClass("overflow-hidden");
  });

  /************************************************************************************************** */

  // totop Button

  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $(window).scrollTop(0);
  });

  /************************************************************************************************** */
  // nav nested menu

  // if ($(window).width() <= 992) {
  //   $(".menu-item-has-children").click(function () {
  //     $(this).children(".sub-menu").slideToggle(300);
  //     $(this).children("> a").toggleClass("icon-rotate");
  //     $(".menu-item-has-children")
  //       .not($(this))
  //       .children(".sub-menu")
  //       .slideUp(300);
  //     $(".menu-item-has-children")
  //       .not($(this))
  //       .children("> a")
  //       .removeClass("icon-rotate");
  //   });
  // }

  /************************************************************************************************** */

  // fixed header

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1) {
      $("header").addClass("fixed-header");
    }
    if ($(window).scrollTop() == 0) {
      $("header").removeClass("fixed-header");
    }
  });

  //  nested menus in footer

  if ($(window).width() < 768) {
    $(".footer-title").click(function () {
      $(this).next(".quick-drop").slideToggle(300);
      $(this).toggleClass("arrow-rotate");
      $(".footer-title").not($(this)).next(".quick-drop").slideUp(300);
      $(".footer-title").not($(this)).removeClass("arrow-rotate");
    });
  }
}); // End document ready
