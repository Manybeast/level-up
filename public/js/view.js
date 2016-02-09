/**
 * Created by IlyaLitvinov on 14.01.16.
 */
//globals observer app

var View = (function () {
    function View() {
        this.template = '<div class="circle COLOR IS_ACTIVE" data-id = "COLOR"></div>';
        this.drawn = '';
        this.container = $('#lighter');
    }

    View.prototype.render = function (model) {
        var isActive = null;

        this.drawn = '';

        for(var key in model) {
            isActive = model[key] ? 'active': '';

            this.drawn = this.drawn+ this.template.replace('COLOR', key).replace('COLOR', key).replace('IS_ACTIVE', isActive);
        }
        $(this.container).html(this.drawn);
    };

    View.prototype.turnTheLight = function (callback) {
        $(this.container).on('click', function (e) {
            if($(e.target).hasClass('circle')) {
                callback($(e.target).attr('data-id'));
            }
        })
    };

    return View;
})();
