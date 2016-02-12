var Model = (function () {
    function Model () {
        this.lights = [{
                color: 'red',
                light: true
            },
            {
                color: 'yellow',
                light: false
            },
            {
                color: 'green',
                light: false
            }];

        console.log('init model');

    }

    Model.prototype.getLights = function () {
        return this.lights;
    };

    Model.prototype.switchColor = function (color) {
        this.lights.forEach(function (item) {
            item.light = false
            if (item.color === color) {
                item.light = true;
            }
        });
    };

    return Model;
})();
