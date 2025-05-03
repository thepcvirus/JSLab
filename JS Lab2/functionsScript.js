
//Assignment 1
function printVariables(value1,value2,value3 = 4){
    var myArray = [value1,value2,value3];
    if(arguments.length > 3);
    for(var i=0;i<arguments.length;i++)//yes i can use arguments to print the other values
    console.log("arguments " + arguments[i]);

    //(1f)
    console.log(localVar);
    console.log(testingVar);
    //

    return myArray;
}


//Assignment 2
//(4a,4b)
function SumVariables(value1 = 0,value2 = 0){
    if(typeof(value1) != "number")
        value1 = 0;
    if(typeof(value2) != "number")
        value2 = 0;
    return value1 + value2;
}
//
