/**
 * Created by IlyaLitvinov on 09.12.15.
 */
var SlideShow = (function () {
    var duration = 500;
    function SlideShow (config) {
        duration = config.duration;
        this.controls = $(config.root).find('.slideshow_item img');
        this.display = $(config.root).find('.slideshow_display img');

        this.init();
    }
    SlideShow.prototype.init = function () {
        var self = this;
        $(this.controls).on('click', function () {
            var path = $(this).attr('src');

            $(self.display).fadeOut(duration, function () {
                $(this).attr('src', path).fadeIn(duration);
            });
        });
    };

    return SlideShow;
})();