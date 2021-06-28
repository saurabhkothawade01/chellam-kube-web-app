// when we click on "Ask Chellam Sir" that time this function will run.
function openform() {
	// it will stored value whatever we will pass in the text box of the web page. 
	var data = document.getElementById("in1").value

	if ((((data.includes("chellam"))) && ((data.includes("are")))) == false) {

		var xhr = new XMLHttpRequest();

		// for launch deployment
		if (((data.includes("deploy")) || (data.includes("deployments")) || (data.includes("deployment")))
			&& ((data.includes("create")) || (data.includes("execute")) || (data.includes("launch")))) {
			var deployName = prompt("Enter Deployment Name : ")
			var imageName = prompt("Enter Image Name : ")
			xhr.open("GET", "http://192.168.56.106/cgi-bin/backend.py?imageName=" + imageName +
				"&deployName=" + deployName + "&data=" + data, true)
		}

		// for launch pod
		else if (((data.includes("pod"))) && ((data.includes("launch")) || (data.includes("execute")) || (data.includes("create")))) {
			var podName = prompt("Enter Pod Name : ")
			var imageName = prompt("Enter Image Name : ")
			xhr.open("GET", "http://192.168.56.106/cgi-bin/backend.py?imageName=" + imageName +
				"&podName=" + podName + "&data=" + data, true)
		}

		// for delete pod
		else if (((data.includes("delete")) || (data.includes("remove"))) && ((data.includes("pod")))) {
			var podName = prompt("Enter Pod Name : ")
			xhr.open("GET", "http://192.168.56.106/cgi-bin/backend.py?podName=" + podName + "&data=" + data, true)
		}

		// for delete deployment
		else if (((data.includes("delete")) || (data.includes("remove"))) && ((data.includes("deploy")) || (data.includes("deployments")) || (data.includes("deployment")))) {
			var deployName = prompt("Enter Deployment Name : ")
			xhr.open("GET", "http://192.168.56.106/cgi-bin/backend.py?deployName=" + deployName + "&data=" + data, true)
		}

		// for expose deployment
		else if (((data.includes("expose"))) && ((data.includes("deployments")) || (data.includes("deploy")) || (data.includes("deployment")))) {
			var deployName = prompt("Enter Deployment Name : ")
			var portNo = prompt("Enter Port No : ")
			var svc = prompt("Enter Service Name : ")
			xhr.open("GET", "http://192.168.56.106/cgi-bin/backend.py?deployName=" + deployName + "&portNo=" + portNo + "&svc=" + svc + "&data=" + data, true)
		}

		// for scaling deployment
		else if (((data.includes("scale")) || (data.includes("increase"))) && ((data.includes("deployments")) || (data.includes("deploy")) || (data.includes("deployment")))) {
			var deployName = prompt("Enter Deployment Name : ")
			var scale = prompt("How No. Of Scale : ")
			xhr.open("GET", "http://192.168.56.106/cgi-bin/backend.py?deployName=" + deployName + "&scale=" + scale + "&data=" + data, true)
		}

		else {
			xhr.open("GET", "http://192.168.56.106/cgi-bin/backend.py?data=" + data, true)
		}


		xhr.send();
		xhr.onload = function () {
			var output = xhr.responseText;

			document.getElementById("d1").innerHTML = output;
		}
		document.getElementById('in1').value = "";

	}
	else {
		document.getElementById("d1").innerHTML = "Yaaa I am fine. What can I do for you... ";
	}
}

