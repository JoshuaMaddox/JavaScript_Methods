var myAvg = 0;
var testCount = 0;
var scores =[90, 98, 89, 100, 100, 86, 94]

function average(arr) {
    for(var i = 0; i < arr.length; i++) {
        myAvg += arr[i];
        testCount++;
    }
    myAvg = Math.ceil(myAvg / testCount);
    console.log(myAvg);
    return myAvg;
}

// Using a foreach loop with the variables stored inside the function

function average(arr) {
    var total = 0;
    arr.forEach(function(arr){
        total += arr;
    });
    var avg = Math.ceil(total / arr.length);
    console.log(avg);
    return avg;
    }

