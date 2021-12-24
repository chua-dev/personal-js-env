var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

var the_lat = undefined
var the_long = undefined

function showPosition(position) {
  the_lat = position.coords.latitude;
  the_long = position.coords.longitude;
  document.getElementById("first").innerHTML = the_lat
  document.getElementById("second").innerHTML = the_long
}