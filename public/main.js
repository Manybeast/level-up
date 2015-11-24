/**
 * Created by IlyaLitvinov on 20.11.15.
 */

var fruites = new PriceList('.fruites');

API._post('sum', {a:1, b:2}, function (res) {
    console.log(res);
});
