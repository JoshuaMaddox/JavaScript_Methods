//Running the code will provide an example of "hoisting" in JavaScript

b();
console.log(a);

var a = "hello world";

function b () {
	console.log('called by b!');
};

