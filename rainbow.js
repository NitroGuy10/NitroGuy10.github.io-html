
red();
function red() {
setTimeout(function(){
    var str = document.getElementById("bj").innerHTML;
    var result = str.fontcolor("red");
    document.getElementById("bj").innerHTML = result;
	color = "orange";
     }, 1); 
	 
}
function orange() {
setTimeout(function(){
	var str = document.getElementById("bj").innerHTML;
    var result = str.fontcolor("orange");
    document.getElementById("bj").innerHTML = result;
}, 1000); 
}
/* function orange() {

    setTimeout(function(){
    var str = document.getElementById("bj").innerHTML;
    var result = str.fontcolor("orange");
    document.getElementById("bj").innerHTML = result;
	yellow();
    }, 1000); 
    
}
function yellow() {

    setTimeout(function(){
    var str = document.getElementById("bj").innerHTML;
    var result = str.fontcolor("yellow");
    document.getElementById("bj").innerHTML = result;
	green();
    }, 1000); 
  
}
function green() {

    setTimeout(function(){
    var str = document.getElementById("bj").innerHTML;
    var result = str.fontcolor("green");
    document.getElementById("bj").innerHTML = result;
	blue();
    }, 1000); 
  
}
function blue() {

    setTimeout(function(){
    var str = document.getElementById("bj").innerHTML;
    var result = str.fontcolor("blue");
    document.getElementById("bj").innerHTML = result;
	purple();
    }, 1000); 
  
}
function purple() {

    setTimeout(function(){
    var str = document.getElementById("bj").innerHTML;
    var result = str.fontcolor("purple");
    document.getElementById("bj").innerHTML = result;
	red();
    }, 1000); 
  
}*/
