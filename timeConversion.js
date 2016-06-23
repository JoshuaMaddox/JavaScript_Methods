/*
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br7M/0
	Problem: Time Conversion
	Write a method that will take in a number of minutes, and returns a
	string that formats the number into `hours:minutes`.
*/

var mins = 90;

function timeConv(mins) {
	var hours = 0;
	var minutes = 0;
	var timeStr = "";
	for(var i = 0; i < mins; i++)
	{
		minutes++;
		if(minutes === 60) {
			hours++;
			minutes = 0;
		}
	}
	if(minutes < 10) {
			timeStr = hours + ":" + "0" + minutes;
		}else{
			timeStr = hours + ":" + minutes;	
		}	
	return timeStr;
}