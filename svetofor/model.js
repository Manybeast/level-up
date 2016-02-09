var Model = (function () {
    function Model() {
        this.lights = 
            {                
                green: false,
                yellow: false,
                red: false
            }
           ;
    }

    
    Model.prototype.setColor = function (color) {  
        var property = null;
        for (property in this.lights) {
            this.lights[property] = false;
        }
        
        this.lights[color] = true; 
        console.dir(this.lights);
    };

    return Model;
})();