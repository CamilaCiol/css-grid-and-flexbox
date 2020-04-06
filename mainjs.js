function myFunction1() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//Dropdown menu Filter
function onLoad(){
var mySelect = document.getElementById('mySelect');

mySelect.onchange = function() {
    var x = document.getElementById("mySelect").value;
    if (x == "All" ) {
        showOrHideByElementClass("filterDiv", "block");
    }
    else{
        showOrHideByElementClass("filterDiv", "none");
        showOrHideByElementClass(x, "block");
    }
}
}
function showOrHideByElementId(id, showHide){
    document.getElementById(id).style.display = showHide;
}
function showOrHideByElementClass(className, showHide){            
    var listDeElementos = document.getElementsByClassName(className);
    for(var i=0; i<listDeElementos.length; i++){
        listDeElementos[i].style.display = showHide;
    }            
}





