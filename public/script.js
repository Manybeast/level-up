/**
 * Created by php on 02.02.2016.
 */
function someEvent () {
    var container = document.querySelector('.container'),
        bt1 = document.querySelector('.btn1'),
        bt2 = document.querySelector('.btn2'),
        e,
        target = null;

    function changeColor (container) {
        debugger;
        container.addEventListener('click', function (e) {
            if ($(e.target).hasClass('btn1')) {
                console.log('green');
                $(container).css("background-color", "green");
            }
            else if ($(e.target).hasClass('btn2')) {
                console.log('red');
                $(container).css("background-color", "red");
            }
        });
    }

    changeColor('.container');
}

someEvent();
