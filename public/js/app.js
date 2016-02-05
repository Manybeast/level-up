/**
 * Created by IlyaLitvinov on 14.01.16.
 */
(function () {

    //Точка входа в приложение в этом месте инициализируются все сущности,
    //происходит первоначальное конфигурирование приложения
    var model = new Model();
    var view = new View();
    var controller = new Controller(model, view);
})();