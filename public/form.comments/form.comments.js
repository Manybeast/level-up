/**
 * Created by IlyaLitvinov on 12.12.15.
 */

    $.fn.commentForm = function () {
        console.log('Hello world');
        console.log(this);
        $.ajax({
            url: '/comment',
            method: 'GET',
            success: function (data) {
                console.log('Finish!');
                console.log(data);
            }
        });
        $.ajax({
            url: '/comment',
            method: 'POST',
            data: {
                "author": "Test Jones",
                "text": "youText"
            },
            success: function (data) {
                console.log('POST Request!');
                console.log(data);
            }
        });
        $.ajax({
            url: '/fruites',
            method: 'POST',
            data:{
                fruite: 'KIWI'
            },
            success: function (data) {
                console.log('POST Request!');
                console.log(data);
            }
        });
    };