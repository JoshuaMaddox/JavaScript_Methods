//Converting JSON

//Create an ObjectLiteral
var objectLiteral = {
	firstName: 'Mary',
	isAProgrammer: true
}

//Log the Object Literaly into a JSON string
console.log(JSON.stringify(objectLiteral));

//Sets the variable jsonValue to a JavaScript Object using JSON.parse
var jsonValue = JSON.parse('{"firstName":"Mary","isAProgrammer":true}');

console.log(jsonValue);



