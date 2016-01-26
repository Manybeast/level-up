
var Model = (function () {
    function Model() {
        console.log('Model!');

        this.items = [{
                    id: 0,
                    title: "Test",
                    completed: true
            },
                {
                    id: 1,
                    title: "Test2",
                    completed: false
            }
        ]
    }
    return Model;
})();