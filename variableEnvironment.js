function b() {
	var myVar;
	console.log(myVar + " --- Step 5");
}

console.log(myVar + " After function B --- Step 1");

function a() {
	var myVar = 2;
	console.log(myVar + " --- Step 4")
	b();
}

console.log(myVar + " After function A --- Step 2");

var myVar = 1;

console.log(myVar + " --- Step 3")

a();

console.log(myVar + " After function A executed" + " Step --- 6");

