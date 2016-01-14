/**
 * Created by IlyaLitvinov on 14.01.16.
 */
(function (window) {
    function Model () {
        this.test = 'test';
    }

    Model.prototype.getTest = function () {
        return this.test;
    };

    window.app = window.app || {};
    window.app.Model = Model;
})(window);