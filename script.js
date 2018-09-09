var input = document.getElementById("teamInput");

// Execute a function when the user releases a key on the keyboard
var obj;
var txt="";
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status ==200) {
			console.log(obj);
			obj = JSON.parse(this.responseText);
			document.getElementById("demo").innerHTML="";
			for (x in obj) {
				if (obj[x]!=null) {
					document.getElementById("demo").innerHTML+= x +": "+obj[x] +"<br>";
				}
			}
		}
	};
	xhttp.open("GET","https://www.thebluealliance.com/api/v3/team/frc"+input.value,true);
	xhttp.setRequestHeader("X-TBA-Auth-Key","CmZuEuHSw0Bax8FRO7T3eT8KTfb4wisJn6qtCAg5K071OIO7gRq19rjWX68RTZV7");
	xhttp.send();
  }
});