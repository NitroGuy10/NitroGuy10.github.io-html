//iteration
var cycle = new int();
(function it() {
setTimeout(function(){
	var cycle;
    document.getElementById("it").innerHTML = cycle.toString();
    cycle = cycle + 1;
     }, 1); 
})();
//version
document.getElementById("ver").innerHTML = "v2";

//script
	    (function color() {
setTimeout(function(){
var cycle;
    var color;
	if (cycle > 5000) {color = "red"}
    var str = document.getElementById("rainbow").innerHTML;
    var result = str.fontcolor(color);
    document.getElementById("rainbow").innerHTML = result;
    cycle = cycle + 1;
     }, 1); 
})();
/*function red() {
setTimeout(function(){
    var str = document.getElementById("rainbow").innerHTML;
    var result = str.fontcolor("red");
    document.getElementById("rainbow").innerHTML = result;
     }, 1); 
}}
function orange() {
setTimeout(function(){
    var str = document.getElementById("rainbow").innerHTML;
    var result = str.fontcolor("orange");
    document.getElementById("rainbow").innerHTML = result;
     }, 1); 
	 
}
function yellow() {
setTimeout(function(){
    var str = document.getElementById("bj").innerHTML;
    var result = str.fontcolor("yellow");
    document.getElementById("bj").innerHTML = result;
     }, 1); 
	 
}function green() {
setTimeout(function(){
    var str = document.getElementById("bj").innerHTML;
    var result = str.fontcolor("green");
    document.getElementById("bj").innerHTML = result;
     }, 1); 
	 
}
}function blue() {
setTimeout(function(){
    var str = document.getElementById("bj").innerHTML;
    var result = str.fontcolor("blue");
    document.getElementById("bj").innerHTML = result;
     }, 1); 
	 
}*/
