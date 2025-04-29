//(1)
let otherWindow = window.open('https://brave.com/', '_blank', 'width=400,height=300,scrollbars=yes');

otherWindow.onload = function() {
    otherWindow.scrollTo({
        top: otherWindow.document.body.scrollHeight,
        behavior: 'smooth'
    });
}

otherWindow.document.write("Mohamed Mostafa");
//all its content is deleted


console.log(otherWindow.closed);
otherWindow.close();
//----------------------


//(2)
console.log(document.getElementsByTagName("img"));
console.log(document.images);
 
console.log(document.getElementsByTagName("option"));

console.log(document.getElementsByTagName("table")[1].getElementsByTagName("td"));

var x = document.getElementsByClassName("BGrey");
var y = document.getElementsByClassName("fontBlue");
var z =[]
for(var i=0;i<x.length;i++){
    for(var j=0;j<y.length;j++){
        if(x[i] == y[j]){
            z.push(x[i]);
            break;
        }
    }
}
console.log(z);
//----------------------


//(4)
let currentdate = new Date();
 
let timerId = setInterval(() => {
    currentdate = new Date();
    //console.log(currentdate.toLocaleString());
    document.title = currentdate.toLocaleString();       
     }, 1000);

function print(){
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("age").value);
}
//----------------------
