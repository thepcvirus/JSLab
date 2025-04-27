
//Returns that ConsumingScript.js:2 Uncaught ReferenceError: printVariables is not defined

//Assignment 1
//(1a)
var value1 = 1;
var value2 = 2;
var value3 = 3;
console.log(value1,value2,value3);
//
//(1b)Calling the function before definition line 

var localVar=3; 
testingVar=5;

//(1c)
console.log(printVariables(value1,value2,value3));
//

//(1d)
console.log(printVariables(3,5));
//

//(1e)
console.log(printVariables(value1,value2,value3,6,7));
//

//(1g)
console.log(localVar);
console.log(testingVar);
//

//(2)
var funcexp = printVariables(value1,value2,value3);
//