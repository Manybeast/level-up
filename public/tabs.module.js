/**
 * Created by IlyaLitvinov on 06.12.15.
 */
var Tabs = (function () {
    function Tabs(config) {
        this.mode = config.mode;
        this.root = $(config.root);
        this.duration = config.duration;
        this.controls = $(config.root).find('.tab-controll a');
        this.init();
    }

    Tabs.prototype.init = function () {
        var self = this;

        this.controls.on('click', function (e) {
            debugger;
            self.root.find('.' + $(this).attr('data'))
                [self.mode](self.duration)
                .addClass('active')
                .siblings()
                .removeClass('active')
                .hide();

            $(this)
                .parent('li')
                .addClass('active')
                .siblings()
                .removeClass('active');

            e.preventDefault();
        });
    };

    return Tabs;
})();