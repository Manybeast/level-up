/**
 * Created by IlyaLitvinov on 21.12.15.
 */

(function ($) {
    $.fn.myCarousel = function (config) {
        var _this = this,
            slides = _this.find('li'),
            itemsWidth = getItemsWidth(),
            carouselContainerWidth = getContainerWidth(),
            currentSlide = 0,
            controls = null,
            container = null;

        container = _this.addClass('jw-slides').wrap('<div class = "jw-viewport"></div>').css({
            width: carouselContainerWidth + '%',
            display: 'table',
            transition: 'all ' + 500 + 'ms'
        }).parent().wrap($('<div></div>', {
            class: 'jw-carousel-container'
        })).parent();

        controls = container.parent().append('<div>' +
            '<a data = "prev" class = "jw-slider-controls">prev</a>' +
            '<a data = "next" class = "jw-slider-controls">next</a>' +
            '</div>').find('a');

        $(slides).css({
            width: itemsWidth + '%'
        });

        function getItemsWidth() {
            return 100 / slides.length;
        }

        function getContainerWidth() {
            return 100 * slides.length;
        }

        function nextSlide() {
            console.log('Next');
            if(currentSlide < slides.length-1) {
                currentSlide++;
                console.log(itemsWidth * currentSlide);
                moveSlide('-' + itemsWidth * currentSlide + '%');
            } else {
                currentSlide = 0;
                moveSlide('-' + itemsWidth * currentSlide + '%');
            }
        }

        function handleEvents() {
            $(controls[1]).on('click', function (e) {
                e.preventDefault();
                nextSlide();
            });

        }

        function moveSlide(nextSlide) {
            _this.css({
                transform: 'translateX(' + nextSlide + ')',
                MozTransform: 'translateX(' + nextSlide + ')',
                WebkitTransform: 'translateX(' + nextSlide + ')',
                msTransform: 'translateX(' + nextSlide + ')'
            });
        }

        handleEvents();

    };
})(window.jQuery);