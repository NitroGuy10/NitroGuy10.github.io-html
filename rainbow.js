function red() {

    setTimeout(function(){
    var str = document.getElementById("rainbow").innerHTML;
    var result = str.fontcolor("red");
    document.getElementById("rainbow").innerHTML = result;
    }, 1000); 
  
}
red();
