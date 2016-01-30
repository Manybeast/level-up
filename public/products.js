var Products = (function(){
	function Constructor(root){
		this.items = null;
		this.root = document.querySelector(root);
		this.listItem = this.root.querySelector('.listProducts');
        this.addBtn = this.root.querySelector('.add');
        this.removeBtn = this.root.querySelector('.remove');
        this.productField = this.root.querySelector('.fieldProduct');		
        this.getItems();
        this.addEvents();
	}

	Constructor.prototype.render = function(){
		var self = this;
		this.listItem.innerHTML = '';
		this.items.forEach(function(item, i){
			var li = document.createElement('li');
			li.innerHTML = item;
			self.listItem.appendChild(li);
			li.addEventListener('click', function(){
				self.removeFruits(i);
			})
		})
	}
	
    
    Constructor.prototype.getItems = function(){
		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'fruites', false);

		xhr.send();

		if (xhr.status !=200){
			console.log( xhr.status + ':' + xhr.statusText );
		}else {
			console.log(xhr.response);
			this.items = JSON.parse(xhr.response);	
            this.render();
		}
	}
    
    Constructor.prototype.addEvents = function(){
        var self = this;
        this.addBtn.addEventListener('click', function(){
            self.addFruits();           
        });
    }
    
    Constructor.prototype.addFruits = function(){
		var xhr = new XMLHttpRequest(),
            newFruit = this.productField.value,
            newItem = {
                'fruite' : newFruit
            }
            
            xhr.open('POST', 'fruites', false);

			xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

			xhr.send(JSON.stringify(newItem));

			if (xhr.status !=200){
				console.log( xhr.status + ':' + xhr.statusText );
			}else {
				console.log(xhr.response);
				this.items = JSON.parse(xhr.response);
                this.render();
			}
	}
    
    Constructor.prototype.removeFruits = function(id){
		var xhr = new XMLHttpRequest();
     
            
            xhr.open('DELETE', 'fruites/' + id, false);

			xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

			xhr.send();

			if (xhr.status !=200){
				console.log( xhr.status + ':' + xhr.statusText );
			}else {
				console.log(xhr.response);
				this.items = JSON.parse(xhr.response);
                this.render();
			}
	}
    
	return Constructor;
})();