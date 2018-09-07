var input = document.getElementById("teamInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status ==200) {
			alert(this.responseText);
		}
	};
	xhttp.open("GET","https://www.thebluealliance.com/api/v3/team/frc"+input.value,true);
	xhttp.setRequestHeader("X-TBA-Auth-Key","CmZuEuHSw0Bax8FRO7T3eT8KTfb4wisJn6qtCAg5K071OIO7gRq19rjWX68RTZV7");
	xhttp.send();
  }
});