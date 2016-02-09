var View = (function () {
    function View() {
        console.log('View');
        this.container = $('.container');
        this.lights = $('.circle');
       
    }

    
    View.prototype.addChannels = function (channelName, handler) {
        var self = this;

               
         if (channelName === 'changeColor') {
           this.container.on('click', function (e) {
              
                var target = null,
                    color = null;

                if (!$(e.target).hasClass('circle')) {      
                    return;
                }

                target = e.target;

                color = $(target).attr('data-color');
                handler(color);
            })
        }
    };

    
    return View;
})();
