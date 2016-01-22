/**
 * Created by IlyaLitvinov on 14.01.16.
 */
console.log(TodoList);
(function () {

    //Точка входа в приложение в этом месте инициализируются все сущности,
    //происходит первоначальное конфигурирование приложения
    function TodoListApplication () {
        this.model = new TodoList.Model();
        this.view = new TodoList.View();
        this.controller = new TodoList.Controller(this.model, this.view);
    }

    var application = new TodoListApplication();
    console.log(application);
})();