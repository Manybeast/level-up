(function () {
    function Lighter () {
        console.log('init main');
        this.model = new Model();
        this.view = new View();
        this.controller = new Controller(this.model, this.view);
    }

    var lighter = new Lighter();
})();
