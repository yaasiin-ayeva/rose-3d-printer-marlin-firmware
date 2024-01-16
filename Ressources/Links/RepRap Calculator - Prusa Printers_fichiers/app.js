jQuery(window).ready(function($) {
    $('#mobile-menu').on('click', function(e) {
        $('#topmenu').slideToggle(400);
    });
    //    var $slider = $('#slider');
    //
    //    $slider.on({
    //        'cycle-before' : function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
    //            $(outgoingSlideEl).addClass('before-leaving');
    //            $(incomingSlideEl).removeClass('after-enter before-leaving');
    //        },
    //        'cycle-after' : function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    //            $(incomingSlideEl).addClass('after-enter');
    //            $(outgoingSlideEl).removeClass('after-enter');
    //        },
    //        'cycle-initialized' : function(event, optionHash) {
    //            $slider.find('.cycle-slide-active').addClass('after-enter');
    //        }
    //    });
    //
    //    $slider.cycle();

    $('[id^="menu-login-search-menu"]').find('li:first-child a').on('click', function(e) {
        $('#header-searchform').slideToggle(400);

        e.preventDefault();
        $("#header-searchform .search-field").focus();
    });

    $('#close-searchform').on('click', function() {
        $('#header-searchform').slideToggle(400);
    });

    $('.selected-lang #toggle-switcher').on('click', function(e) {
        $(this).toggleClass('active');
        $('.other-langs').toggleClass('active');
    });

    $(document).click(function(e) {
        var container = $(".selected-lang #toggle-switcher");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.other-langs').removeClass('active');
        }
    });

    $('#wpfront-notification-bar .wpfront-close').on('click', function(e) {
        $('#wpfront-notification-bar-spacer').remove();
        blog_adjust_wpfnb_height();
    });

    blog_adjust_wpfnb_height();

    function blog_adjust_wpfnb_height() {
        if ($('#wpfront-notification-bar').length > 0) {
            let wpfnbHeight = $('#wpfront-notification-bar').outerHeight();
            $('header').css('top', wpfnbHeight);
            $('body').css('padding-top', 48 + wpfnbHeight);
        } else {
            $('header').css('top', 0);
            $('body').css('padding-top', 48);
        }
    }

    var blogResizeTimer;
    $(window).on('resize', function(e) {
        clearTimeout(blogResizeTimer);
        blogResizeTimer = setTimeout(function() {
            blog_adjust_wpfnb_height();
        }, 250);
    });

});