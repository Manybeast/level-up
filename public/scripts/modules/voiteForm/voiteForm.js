(function ($) {
    $.fn.voiteForm = function () {
        var form = $('<form>'),
            categories = ["jQuery", "YUI", "Dojo", "ExtJS", "Zepto"],
            x;

        $('<h1>', {
            text: 'Ваша любимая библиотека JS?',
            class: 'header test red-header'
        }).appendTo(this);

        form.appendTo(this);

        for (x = 0; x < categories.length; x++) {

            $('<input/>', {
                type: "radio",
                name: "categories",
                id: categories[x],
                value: categories[x]
            }).appendTo(form);

            $('<label/>', {
                text: categories[x],
                "for": categories[x]
            }).appendTo(form);

        }

        $('<button/>', {
            text: "Ответить!"
        }).appendTo(this);
    }
})(jQuery);


//(function($){
//    $.fn.voite = function(){
//
//        var jfirst = this.first();
//
//        $('<h1/>',{
//            text: "Какая ваша любимая JavaScript библиотека?"
//        }).appendTo(jfirst);
//
//        var form = $('<form/>').appendTo(jfirst);
//
//        var x, y, categories = ["jQuery", "YUI", "Dojo", "ExtJS", "Zepto"];
//
//        for( x = 0, y = categories.length; x < y; x++){
//
//            $('<input/>',{
//                type: "radio",
//                name: "categories",
//                id: categories[x],
//                value: categories[x]
//            }).appendTo(form);
//
//            $('<label/>',{
//                text: categories[x],
//                "for": categories[x]
//            }).appendTo(form);
//
//        }
//
//        $('<button/>',{
//            text: "Ответить!"
//        }).appendTo(jfirst);
//
//        return jfirst;
//    };
//
//})(jQuery);