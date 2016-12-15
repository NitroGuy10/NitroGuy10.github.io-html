<html>
<head>
<link rel="shortcut icon" href="favicon1.ico" type="image/x-icon">
<link rel="icon" href="favicon1.ico" type="image/x-icon">
<title>BenJump.com</title>
<style>
h1 {
	font-family: Comic Sans MS, sans-serif;
	text-align: center;
}
</style>
</head>
<body>

<script>
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
</script>
<h1 id=bj>BenJump.com</h1>
<center>
<img src=bj.gif alt="Ben Jumping" />
</center>
</body>
</html>
<!--http://www.w3schools.com/js/js_timing.asp-->
