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