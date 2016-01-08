/**
 * Created by IlyaLitvinov on 21.12.15.
 */

(function ($) {
    $.fn.myCarousel = function (config) {
        var _this = $(this),
            items = _this.find('li'),
            itemsWidth = getItemsWidth(),
            carouselContainerWidth = getContainerWidth(),
            speed = config.swipeSpeed || 500,
            delay = config.swipeDelay || 4000,
            currentSlide = 0,
            isPager = config.pager,
            container = null,
            interval = null,
            pagerItems = null,
            touchCoordinates = {
                touchStart: null,
                touchEnd: null
            },
            controls;

        function create() {
            container = _this
                .addClass('jw-slides')
                .wrap('<div class = "jw-viewport"></div>')
                .parent()
                .wrap($('<div></div>', {
                    class: 'jw-carousel-container'
                })).parent();

            controls = _this.parent().append('<div class = "jw-slider-controls">' +
                '<a data = "prev" class = "jw-slider-control jw-slider-control_prev"></a>' +
                '<a data = "next" class = "jw-slider-control jw-slider-control_next"></a>' +
                '</div>').find('a');

            $(items).css({
                width: itemsWidth + '%'
            });

            _this.css({
                width: carouselContainerWidth + '%',
                display: 'table',
                transition: 'all ' + speed + 'ms'
            });

            if (isPager) {
                createPager();
            }
        }

        function createPager() {
            var pager = $('<div class = "jw-slider-pager"></div>');

            $(items).each(function (i, item) {
                var pagerItem = $('<div></div>', {
                    class: 'jw-slider-pager-item'
                }).append($('<a></a>', {
                    class: 'jw-slider-pager-link',
                    'data-slide-index': i
                }));
                $(pagerItem).appendTo(pager);
            });

            $(pager).appendTo(_this.parent());
            pagerItems = pager.find('a');
        }

        function nextSlide() {
            if (currentSlide < items.length - 1) {
                currentSlide++;

                moveSlide();
            } else {
                currentSlide = 0;

                moveSlide();
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                moveSlide('-' + itemsWidth * currentSlide + '%');
            }
        }

        function showSlide(number) {
            currentSlide = number;
            moveSlide();
        }

        function moveSlide() {
            var slidePosition = '-' + itemsWidth * currentSlide + '%';

            _this.css({
                transform: 'translateX(' + slidePosition + ')',
                MozTransform: 'translateX(-' + slidePosition + ')',
                WebkitTransform: 'translateX(-' + slidePosition + ')',
                msTransform: 'translateX(-' + slidePosition + ')'
            });

            filterActiveItem();
        }

        function getItemsWidth() {
            return 100 / items.length;
        }

        function getContainerWidth() {
            return 100 * items.length;
        }

        function handleEvents() {
            $(controls[1]).on('click', function (e) {
                e.preventDefault();
                nextSlide();
            });

            $(controls[0]).on('click', function (e) {
                e.preventDefault();
                prevSlide();
            });

            $(container).on('mouseenter', function () {
                clearInterval(interval);
            }).on('mouseleave', function () {
                startInterval();
            });

            $(pagerItems).on('click', function () {
                if (isPager) {
                    activatePagerItem($(this).parent());
                }
                showSlide($(this).attr('data-slide-index'));
            });

            $(container).on('touchstart', function (e) {
                e.preventDefault();
                console.log(e);
            });

            //event for mouse cursor swipe
            $(container).on('mousedown', function (e) {
                e.preventDefault();
                touchStarted(e);
                $(container).on('mousemove', function (e) {
                    console.log(e.pageX);
                });
            });

            $(container).on('mouseup', function (e) {
                touchEnded(e);
                $(container).off('mousemove');
            });
        }

        function touchStarted(event) {
            touchCoordinates.touchStart = event.pageX;
        }

        function touchEnded(event) {
            touchCoordinates.touchEnd = (event.touches) ? event.changedTouches[0].pageX : event.pageX;
            if (touchCoordinates.touchStart > touchCoordinates.touchEnd) {
               nextSlide();
            } else {
                prevSlide();
            }
        }


        function filterActiveItem() {
            var active = null;

            $(pagerItems).each(function (i, item) {
                if ($(item).attr('data-slide-index') == currentSlide) {
                    active = item;
                }
            });

            activatePagerItem($(active).parent());
        }

        function activatePagerItem(that) {
            $(that)
                .addClass('active')
                .siblings()
                .removeClass('active');
        }

        function startInterval() {
            interval = setInterval(nextSlide, delay);
        }

        function sliderInit() {
            create();
            startInterval();
            handleEvents();
            filterActiveItem();
        }

        sliderInit();
    };
})(window.jQuery);