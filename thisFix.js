//playing with the this keyword
var c = {
	name: 'the c object',
	log: function(){
		//Point Self and this to the same memory address
		var self = this;
		self.name = 'update c objet';
		console.log(self);

		var setname = function (newname){
			//Self isn't found within this function so it goes up 
			//to look for self within the outer context and finds
			//the memory address that self was set to point at when the
			//equality operator was set. 
			self.name = newname;
		}
		setname('Updated again! the c object');
		console.log(self);
	}
}

c.log();