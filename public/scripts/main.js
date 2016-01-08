/**
 * Created by IlyaLitvinov on 20.11.15.
 *
 */

$(document).ready(function () {
    $('.carousel').myCarousel({
        swipeSpeed: 1000,
        swipeDelay: 4000,
        pager: true
    });
    $('.carousel2').fadeCarousel({
        swipeSpeed: 1000,
        swipeDelay: 5000,
        pager: false
    });
});
