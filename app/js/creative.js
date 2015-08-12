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

    var open = new Date(2015, 9, 1);

    function remainTime() {
        var date = new Date();
        var remain = open - date;
        var sec = parseInt(remain / 1000);
        var min = parseInt(sec / 60);
        var hours = parseInt(min / 60);
        var days = parseInt(hours / 24);

        return days + "d " + hours % 24 + "h " + two(min % 60) + "m " + two(sec % 60) + "s";

        function two(a) {
            if (a < 10)
                return "0" + a;
            return a;
        }
    }

    function timeUpdate(tick) {
        $('.d-c-day').text(remainTime());
        window.requestAnimationFrame(timeUpdate);
    }


})(jQuery); // End of use strict


$(document).ready(function () {
    var jWindow = $(window);
    var wHeight = jWindow.height();

    var l = $('.portfolio-box-caption').length;

    var element = $('.portfolio-box-caption:eq(0)');
    var eHeight = element.height();
    var point1 = (wHeight - (eHeight / 2.5)) / 2 + eHeight * 0.2;
    var point2 = point1 + eHeight / 5 + eHeight * 0.2;
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


function show() {
    $('#q').animate({
        'paddingBottom': '+=1500px'
    }, "normal", function () {
        $('#q').hide('fade', 300, function () {
            $('#a').show('fade', 300, function () {
                $('html, body').stop().animate({
                    scrollTop: ($('#artist').offset().top - 50)
                }, 1250, 'easeInOutExpo');
            });
        });
    });

}

var condition = {
    email: false,
    name: false,
    phone: false

};


condition.emailCheck = function () {
    if (validateEmail($(this).val())) {
        $(this).css('color', '#000');
        condition.email = true;
        return;
    }
    condition.email = false;
    $(this).css('color', '#E9425D');
};


condition.nameCheck = function () {
    var re = new RegExp("^[a-z가-힇]{2,}$", 'ig');
    if (re.test($(this).val())) {
        condition.name = true;
        $(this).css('color', '#000');
        return;
    }
    condition.name = false;
    $(this).css('color', '#E9425D');
}

condition.phoneCheck = function () {
    var re = new RegExp("^[0-9-]{8,}$", 'ig');
    if (re.test($(this).val())) {
        condition.phone = true;
        $(this).css('color', '#000');
        return;
    }
    condition.phone = false;
    $(this).css('color', '#E9425D');
}


$('#email').bind('keydown keypress change', condition.emailCheck);
$('#name').bind('keydown keypress change', condition.nameCheck);
$('#phone').bind('keydown keypress change', condition.phoneCheck);


function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

$('#register-btn').bind('click', function () {
    if (!condition.name) {
        alert("이름은 두글자 이상 한글이나 영문으로 작성해주세요.");
        return;
    }
    if (!condition.email) {
        alert("이메일 형식이 맞지 않습니다.");
        return;
    }
    if (!condition.phone) {
        alert("전화번호는 하이픈과 숫자만 허용됩니다.");
        return;
    }

    $.get('/api/user?name=' + $('#name').val() + '&email=' + $('#email').val() + '&phone=' + $('#phone').val()).done(
        function () {
            $('.hide-when-ok').hide();
            $('.show-when-ok').show();
            setTimeout(function () {
                $('.modal').hide("fade", 500);
            }, 3000);
        });
});
