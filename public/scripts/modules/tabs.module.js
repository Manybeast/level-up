/**
 * Created by IlyaLitvinov on 06.12.15.
 * { config } object
 * {
 *  mode: 'slideDown' || 'fadeIn' || 'show',
 *  root: root html element's class
 * }
 */
var Tabs = function (root) {
    var _root = $(root);

    function init() {
        _root
            .find('.tab-controll a')
            .on('click', function (e) {
                e.preventDefault();
                var target = $(this).attr('data');

                _root
                    .find('.' + target)
                    .fadeIn()
                    .addClass('active')
                    .siblings()
                    .removeClass('active')
                    .hide();

                $(this)
                    .parent()
                    .addClass('active')
                    .siblings()
                    .removeClass('active');

            });
    }

    init();

    return this;
};


//
//var Tabs = (function () {
//    function Tabs(config) {
//        this.mode = config.mode;
//        this.root = $(config.root);
//        this.duration = config.duration;
//        this.controls = $(config.root).find('.tab-controll a');
//        this.init();
//    }
//
//    Tabs.prototype.init = function () {
//        var self = this;
//
//        this.controls.on('click', function (e) {
//            $(this)
//                .parent('li')
//                .addClass('active')
//                .siblings()
//                .removeClass('active');
//
//            self.root.find('.' + $(this).attr('data'))
//                [self.mode](self.duration)
//                .addClass('active')
//                .siblings()
//                .removeClass('active')
//                .hide();
//
//            e.preventDefault();
//        });
//    };
//
//    return Tabs;
//})();