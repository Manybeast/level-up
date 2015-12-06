/**
 * Created by IlyaLitvinov on 20.11.15.
 */

$(document).ready(function () {
    //function gallery() {
    //    $('.el').on('click', function () {
    //        var modal = $('.modal'),
    //            cancelBtn = $('<div>', {
    //                text: 'close',
    //                on: {
    //                    'click': function () {
    //                        modal.fadeOut(500);
    //                    }
    //                }
    //            }).css({
    //                position: "absolute",
    //                top: 0,
    //                right: 0
    //            });
    //
    //        modal.css({
    //            'left': (window.innerWidth - $(modal).width()) / 2,
    //            'top': (window.innerHeight - $(modal).height()) / 2,
    //            'background': $(this).css('background-color')
    //        }).fadeIn(500);
    //
    //        modal.append(cancelBtn);
    //    });
    //}
    //
    //function galleryAnimated() {
    //    var modal = $('.modal'),
    //        isAnimate = false,
    //        animationDuration = 300,
    //        current = null,
    //        previousDiv = null;
    //
    //    $('.el').on('click', function () {
    //        isAnimate = false;
    //        show(this);
    //    });
    //
    //    modal.on('click', function () {
    //        isAnimate = false;
    //        close(this);
    //    });
    //
    //    function close(_el) {
    //        var el = $(_el);
    //        if (previousDiv) {
    //            modal.animate({
    //                width: previousDiv.width(),
    //                height: previousDiv.height(),
    //                top: previousDiv.offset().top,
    //                left: previousDiv.offset().left
    //            }, {
    //                duration: animationDuration,
    //                complete: function () {
    //                    modal.css({
    //                        'display': "none",
    //                        'opacity': 0
    //                    });
    //                    current.css({
    //                        opacity: 1
    //                    });
    //                }
    //            });
    //        }
    //
    //    }
    //
    //    function show(_el) {
    //        var el = $(_el);
    //        current = el;
    //        isAnimate = true;
    //
    //        if (previousDiv) {
    //            previousDiv.css({
    //                "opacity": 1
    //            });
    //        }
    //        el.css({
    //            opacity: 0
    //        });
    //
    //        modal.css({
    //            display: 'inline-block',
    //            opacity: 1,
    //            top: el.offset().top,
    //            left: el.offset().left,
    //            width: el.width(),
    //            height: el.height(),
    //            background: el.css('background')
    //        });
    //
    //        modal.animate({
    //            width: 400,
    //            height: 400,
    //            top: (window.innerHeight - 400) / 2,
    //            left: (window.innerWidth - 400) / 2
    //        }, {
    //            duration: animationDuration,
    //            fail: function () {
    //                console.warn('FAIL')
    //            },
    //            //specialEasing: {
    //            //    width: 'swing',
    //            //    height: 'swing'
    //            //},
    //            complete: function () {
    //                console.log('Completed');
    //            },
    //            step: function () {
    //                console.log(isAnimate);
    //                if (!isAnimate) {
    //                    modal.stop();
    //                    close(el);
    //                }
    //            }
    //        });
    //
    //        previousDiv = (!isAnimate) ? previousDiv : el;
    //    }
    //}

    var gellery = new Gallery({
        root: '.gallery',
        images: [
            'img/1.png',
            'img/2.png',
            'img/3.png',
            'img/4.png'
        ]
    });

    var tabs = new Tabs({
        root: '.tabs',
        duration: 500,
        mode: 'fadeIn'
    });
    var optionsTab = new Tabs({
        root: '.options',
        duration: 500,
        mode: 'show'
    });

});