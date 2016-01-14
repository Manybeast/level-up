/**
 * Created by IlyaLitvinov on 15.01.16.
 */
(function (window) {
    window.$on = function (target, type, callback, useCapture) {
        target.addEventListener(type, callback, !!useCapture);
    };
})(window);