var Example = (function() {
	function Consructor() {
		this._trafficlight = null; //светофор
		this._lights = []; //сигналы светора
	}

	Consructor.prototype.draw = function() {
		var _body = document.querySelector('body');
		var _light;
		this._trafficlight = document.createElement('div');
		this._trafficlight.className = 'trafficlight';
        
		_light = document.createElement('div');
		_light.classList.toggle('circle');
		_light.classList.toggle('red');
		_light.classList.toggle('on');
        
		this._trafficlight.appendChild(_light);

		_light = document.createElement('div');
		_light.classList.toggle('circle');
		_light.classList.toggle('yellow');
        
		this._trafficlight.appendChild(_light);

		_light = document.createElement('div');
		_light.classList.toggle('circle');
		_light.classList.toggle('green');
        
		this._trafficlight.appendChild(_light);
		_body.appendChild(this._trafficlight);
		this._lights = this._trafficlight.querySelectorAll('.circle');		
	}

	Consructor.prototype.changeColor = function(e) {
		var i;
		for (i = 0; i < this._lights.length; i++) {			
			if (this._lights[i].matches('.on')) {
				this._lights[i].classList.toggle('on');
			}
		}
        
		e.target.classList.toggle('on');
	}

	Consructor.prototype.addEvent = function() {
			var i;
			for (i = 0; i < this._lights.length; i++) {
				this._lights[i].addEventListener('click',this.changeColor.bind(this));
			}
	}

	return Consructor;
})();

var Lighter1 = new Example();
var Lighter2 = new Example();
Lighter1.draw();
Lighter1.addEvent();
Lighter2.draw();
Lighter2.addEvent();
