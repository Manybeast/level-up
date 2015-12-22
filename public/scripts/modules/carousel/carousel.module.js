/**
 * Created by IlyaLitvinov on 21.12.15.
 */

(function ($) {
    $.fn.myCarousel = function (config) {
        var _this = $(this),
            interval = null,
            items = _this.find('li'),
            itemsWidth = getItemsWidth(),
            carouselContainerWidth = getContainerWidth(),
            container = null,
            currentSlide = 0,
            speed = config.swipeSpeed || 500,
            delay = config.swipeDelay || 4000,
            controls;

        container = _this
            .addClass('jw-slides')
            .wrap('<div class = "jw-viewport"></div>')
            .parent()
            .wrap($('<div></div>', {
                class: 'jw-carousel-container'
            })).parent();

        controls = _this.parent().append('<div>' +
            '<a data = "prev" class = "jw-slider-controls">prev</a>' +
            '<a data = "next" class = "jw-slider-controls">next</a>' +
            '</div>').find('a');

        $(items).css({
            width: itemsWidth + '%'
        });

        _this.css({
            width: carouselContainerWidth + '%',
            display: 'table',
            transition: 'all ' + speed + 'ms'
        });

        function nextSlide() {
            if(currentSlide < items.length-1) {
                currentSlide++;
                moveSlide('-' + itemsWidth * currentSlide + '%');
            } else {
                currentSlide = 0;
                moveSlide('-' + itemsWidth * currentSlide + '%');
            }
        }

        function prevSlide() {
            if(currentSlide > 0) {
                currentSlide--;
                moveSlide('-' + itemsWidth * currentSlide + '%');
            }
        }

        function moveSlide(nextSlide) {
            _this.css({
                transform: 'translateX(' + nextSlide + ')',
                MozTransform: 'translateX(-' + nextSlide + ')',
                WebkitTransform: 'translateX(-' + nextSlide + ')',
                msTransform: 'translateX(-' + nextSlide + ')'
            });
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
            })

        }

        function startInterval () {
            interval = setInterval(nextSlide, delay);
        }

        function sliderInit () {
            startInterval();
            handleEvents();
        }

        sliderInit();
    };
})(window.jQuery);