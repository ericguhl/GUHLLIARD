// NavBarSmall
function myFunction() {
  var x = document.getElementById("navbarSmall");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
// Open Benefit
function openBen(evt, benName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("ben");
  for (i = 0; i < x.length; i++) {
    x[i].style.display="none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i <  x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-black", " w3-green");
  }
  document.getElementById(benName).style.display = "block";
  evt.currentTarget.className += " w3-black";
}
function openLink(evt, rudiName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("rudi");
  for(i = 0; i < x.length; i++) {
    x[i].style.display="none";
  }
  tablinks = document.getElementsByClassName(
    "tablink");
    for(i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-black", " w3-green");
    }
    document.getElementById(rudiName).style.display = "block";
    evt.currentTarget.className += " w3-black";
}
//Open Accordion
function openAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
