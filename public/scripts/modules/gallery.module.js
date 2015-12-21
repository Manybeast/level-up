/**
 * Created by IlyaLitvinov on 05.12.15.
 */
var Gallery = (function () {
    var DURATION = 300,
        SIZE = {
            width: 400,
            height: 400
        };

    Object.freeze(SIZE);

    function Gallery(config) {
        this.items = $(config.root).find('.el');
        this.modal = $('<li>', {
            class: 'modal'
        });

        this.offset = null;
        this.previouseElement = null;

        $(config.root).append(this.modal);

        this.attachEvents();
    }

    Gallery.prototype.attachEvents = function () {
        var self = this;

        this.items.on('click', function () {
            self.show(this);
        });

        this.modal.on('click', this.close.bind(this));
    };

    Gallery.prototype.show = function (currentElement) {
        var _currentElement = $(currentElement);

        this.offset = _currentElement.offset();

        if (this.previouseElement) {
            this.previouseElement.css({
                opacity: 1
            });
        }

        _currentElement.css({
            opacity: 0
        });

        this.modal.css({
            top: this.offset.top,
            left: this.offset.left,
            width: _currentElement.width(),
            height: _currentElement.height(),
            display: 'inline-block',
            opacity: 1,
            backgroundColor: _currentElement.css('background-color')
        });

        this.modal.animate({
            top: (window.innerHeight - SIZE.width) / 2,
            left: (window.innerWidth - SIZE.height) / 2,
            width: SIZE.width,
            height: SIZE.height,
            backgroundColor: _currentElement.css('background-color')
        }, {
            duration: DURATION
        });

        this.previouseElement = _currentElement;
    };

    Gallery.prototype.close = function () {
        var self = this;

        this.modal.animate({
            top: this.offset.top,
            left: this.offset.left,
            width: this.previouseElement.width(),
            height: this.previouseElement.width()
        }, {
            duration: DURATION,
            complete: function () {
                self.modal.css({
                    display: 'none',
                    opacity: 0
                });
                self.previouseElement.css({
                    opacity: 1
                })
            }
        });
    };

    return Gallery;
})();