/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();


    window.requestAnimationFrame(timeUpdate);

    var open = new Date(2015, 10, 1);

    function remainTime() {
        var date = new Date();
        var remain = new Date(open - date);
        return remain.getDate() + "d " + remain.getHours() + "h " + remain.getMinutes() + "m " + remain.getSeconds() + "s"
    }

    function timeUpdate(tick) {
        $('#dday').text(remainTime());
        window.requestAnimationFrame(timeUpdate);
    }


})(jQuery); // End of use strict


$(document).ready(function () {
    var jWindow = $(window);
    var wHeight = jWindow.height();

    var l = $('.portfolio-box-caption').length;

    var element = $('.portfolio-box-caption:eq(0)');
    var eHeight = element.height();
    var point1 = (wHeight - (eHeight / 2.5)) / 2;
    var point2 = point1 + eHeight / 5;
    window.requestAnimationFrame(scroll($('.portfolio-box-caption:eq(0)'), point1, point2));
    window.requestAnimationFrame(scroll($('.portfolio-box-caption:eq(1)'), point1, point2));
    window.requestAnimationFrame(scroll($('.portfolio-box-caption:eq(2)'), point1, point2));
    window.requestAnimationFrame(scroll($('.portfolio-box-caption:eq(3)'), point1, point2));
    window.requestAnimationFrame(scroll($('.portfolio-box-caption:eq(4)'), point1, point2));
    window.requestAnimationFrame(scroll($('.portfolio-box-caption:eq(5)'), point1, point2));


    function scroll(element, point1, point2) {
        function callback(tick) {
            if (parseInt(tick) % 5 != 0) {
                window.requestAnimationFrame(callback);
                return;
            }
            var clientTop = element.offset().top - jWindow.scrollTop();
            var clientBottom = clientTop + eHeight;
            if (clientTop < point2) {
                element.addClass('showing');
            }
            if (clientBottom < point1) {
                element.removeClass('showing');
            }
            if (clientTop > point2) {
                element.removeClass('showing');
            }
            window.requestAnimationFrame(callback);
        }

        return callback;
    }


});
