// function b(){
// 	console.log(myVar);
// }

// function a(){
// 	var myVar = 2;
// 	b();
// }

// var myVar = 1;
// a();

//B is lexically scoped inside of function a, they have access to the same
//scope. Within this scope var myVar has been initialised to 2 so when function b
//goes looking for the value of myVar it finds it within the scope of function a
//In the code above function b sits outside on the global environments so when function
// b is ran, it goes looking for the value of myVar it finds it in the Global environment.

function a(){

	function b(){
	console.log(myVar);
	}

	var myVar = 2;
	b();
}

var myVar = 1;
a();

