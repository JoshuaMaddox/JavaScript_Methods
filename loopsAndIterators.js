
//Using a for...in loop, console.log all of the keys and values in the following object:

var myObj = {"wheels": 3, "horsepower": 600, "decal": "flames", "awesome": true , "holdsBarred": []};

function objForIn(){
	for (var i in myObj) {
	    console.log(i);
	    console.log(myObj[i]);
	} 
}

objForIn();

// Using the .map function, return an array that is equal to the square of each of the values in the following array:

function squareIt(num){
 	return num * num;
}

function squareToSpare() {
	var myArr = [1, 2, 5, 7, 11];
	var sqrdArr = myArr.map(squareIt);
	return(sqrdArr);
}

squareToSpare();

// Using the .reduce function, find the product of the numbers in the following array:

function reducedProduct(){
	var product = [3, 5, 7, 9, 12].reduce(function(previousValue, currentValue) {
  	return previousValue + currentValue;
	});
	return product;
}

reducedProduct();

// Using the .filter function, create a new array of only odd numbers from the following array:

function isOdd(num){	
	return num % 2 === 1;
}
function oddOneIn(){
	var oddies = [1, 22, 35, 2, 4, 7, 9].filter(isOdd);
	return oddies;
}

oddOneIn();

//Using the .sort function, sort the following array reverse-alphabetically:

function revSort(){
	var arrSort = ['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee'];
	arrSort.sort();
	arrSort.reverse();
	console.log(arrSort);
}

revSort();
