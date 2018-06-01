(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        var wWidth = $(window).width();


        //-----menu------
        $(".nav-wrapper > ul > li, ul.dropdown li").on("mouseenter mouseleave", function () {
            $(this).toggleClass("dropdwon");
        });
        $(".pixinav .search_button, .pixinav .search-close").on("click", function () {
            $('.search-form').toggleClass('search-open');
        });
        $('.responsive-nav .nav-icon, .responsive-nav .nav-button-close').on("click", function () {
            $('.nav-wrapper').toggleClass('right-canvas');
        });

        $(".responsive-nav ul.dropdown ").on("click", function (e) {
            e.stopPropagation();
        });
        $('.responsive-nav .nav-wrapper  ul  li').on("click", function () {
            $(this).children('.mega_menu').slideToggle().css({
                "display": "flex"
            });
            $(this).children('ul').slideToggle();

        });
        $(".responsive-nav .nav-wrapper ul  li  a").on("click", function () {
            $(this).toggleClass("icon_rotated");
        });

        //----------vanubox----------
        $('.watch_video').venobox();
        $('#portfolio_vid').venobox();


        /*--------parallax--------*/
        if (wWidth > 767) {
            /* $('.hero_area_v6').parallax("50%", 0.3); */
            /* $('.drone_feature_section').parallax("50%", 0.3); */
            $('.drone_video_section').parallax("50%", 0.3);
            $('.newsletter_section').parallax("50%", 0.2);
            $('.drone_service_section').parallax("50%", 0.3);
        }


    /* ---------------------
    Mouse Move
    ----------------------- */
    $('.hero_area_v8').mousemove(function (e) {
        var x = -(e.pageX + this.offsetLeft) / 50;
        var y = -(e.pageY + this.offsetTop) / 50;
        $(this).css('background-position', x + 'px ' + y + 'px');
    });


    //------Adjusting the top nav showing the top nav when scrolling >= 53----
    var wHight = $(window).height();
    $(window).on('scroll', function () {
        var check = $('#logo2');
        if ($(this).scrollTop() >= 1) {
            $("#header").addClass("sticked");
        } else {
            $("#header").removeClass("sticked");
        }

        if (wWidth > 767) {
            if ($(this).scrollTop() >= wHight) {
                $("#category_fixed").addClass("sticked");
                $(".topCourse_section").addClass("stickMargin");
            } else {
                $("#category_fixed").removeClass("sticked");
                $(".topCourse_section").removeClass("stickMargin");
            }
        }
    });

    //-----nice select--------
    $('select').niceSelect();


    $('#cover').on('click', function () {
        $('.project_collups_wrapper').css({
            'bottom': '-50%'
        });
    });





    //--------Scroll Top---------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scroll_top').fadeIn();
            $('.scroll_top').removeClass('not_visible');
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });



    //------Masonry active-----
    $(window).load(function () {
        if (wWidth > 767) {
            $('.all_service_section_v3 .service_wrapper').masonry({
                itemSelector: '.all_service_section_v3 .single_service',
            });

            $('#servieing_wrapper').masonry({
                itemSelector: '#servieing_wrapper > .col-md-4'
            });

            $('#work_wrapper').masonry({
                itemSelector: '#work_wrapper > .single_work'
            });
        }
    });

    //-------main slider active----
    $(".Modern-Slider").slick({
        autoplay: false,
        autoplaySpeed: 10000,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnDotsHover: true,
        fade: true,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
        draggable: 'true',
        arrows: true,
    });

    //=----Hide arrow--------
    var wWidth = $(window).width();
    if (wWidth < 767) {
        $('.slick-arrow').hide()
    }


}(jQuery));
