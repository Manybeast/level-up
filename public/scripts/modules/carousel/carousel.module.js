/**
 * Created by IlyaLitvinov on 21.12.15.
 */

(function ($) {
    $.fn.myCarousel = function (config) {
        var _this = $(this),
            items = _this.find('li'),
            itemsWidth = getItemsWidth(),
            carouselContainerWidth = getContainerWidth(),
            currentSlide = 0,
            controls;

        _this
            .addClass('jw-slides')
            .wrap('<div class = "jw-viewport"></div>')
            .parent()
            .wrap($('<div></div>', {
                class: 'jw-carousel-container'
            }));

        controls = _this.parent().append('<div>' +
            '<a data = "prev" class = "jw-slider-controls">prev</a>' +
            '<a data = "next" class = "jw-slider-controls">next</a>' +
            '</div>').find('a');

        $(controls[1]).on('click', function (e) {
            e.preventDefault();
            nextSlide();
        });

        $(controls[0]).on('click', function (e) {
            e.preventDefault();
            prevSlide();
        });

        $(items).css({
            width: itemsWidth + '%'
        });

        _this.css({
            width: carouselContainerWidth + '%',
            display: 'table'
        });

        function nextSlide() {
            currentSlide++;
            moveSlide('-' + itemsWidth * currentSlide + '%')
        }

        function prevSlide() {
            currentSlide--;
            moveSlide('+' + itemsWidth * currentSlide + '%')
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
    };
})(window.jQuery);