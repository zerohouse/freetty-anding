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
    $('.portfolio-box-caption').each(function (i) {
        var element = $(this);
        var eHeight = element.height();
        var point = (wHeight - eHeight) / 2;
        var point2 = point + eHeight;
        (function (element) {
            jWindow.scroll(function () {
                var clientTop = element.offset().top - jWindow.scrollTop();
                var clientBottom = clientTop + eHeight;
                if (clientTop < point2) {
                    element.addClass('showing');
                }
                if (clientBottom < point) {
                    element.removeClass('showing');
                }
                if (clientTop > point2) {
                    element.removeClass('showing');
                }
            });
        })(element);

    });
});