(function($){
    $.fn.voite = function(){
        $('<h1/>',{
            text: "Какая ваша любимая JavaScript библиотека?"
        }).appendTo(this);

        var form = $('<form/>').appendTo(this);
        var x, y, categories = ["jQuery", "YUI", "Dojo", "ExtJS", "Zepto"];

        for( x = 0, y = categories.length; x < y; x++){
            $('<input/>',{
                type: "radio",
                name: "categories",
                id: categories[x],
                value: categories[x]
            }).appendTo(form);

            $('<label/>',{
                text: categories[x],
                "for": categories[x]
            }).appendTo(form);
        }

        $('<button/>',{
            text: "Ответить!"
        }).appendTo(this);
    };
})(jQuery);
