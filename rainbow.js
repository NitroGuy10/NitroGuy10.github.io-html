var i = 0;
var color = "black";
setInterval(function(){
i++; document.getElementById("rainbow").innerHTML = "Rainbow!";}, 300);
var j = 1;
setInterval(function(){
if (i > 6) {
i = 1;
}
if (i == 1) { color = "red"; }
if (i == 2) { color = "orange"; }
if (i == 3) { color = "#e0db59"; }
if (i == 4) { color = "green"; }
if (i == 5) { color = "blue"; }
if (i == 6) { color = "purple"; }
var str = document.getElementById("rainbow").innerHTML;
    var result = str.fontcolor(color);
    document.getElementById("rainbow").innerHTML = result;
}, 1);
