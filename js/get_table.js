function getXMLObject(){
	var xmlHttp = false;
	try {
	  xmlHttp = new ActiveXObject("Msxml2.XMLHTTP")  // For Old Microsoft Browsers
		}
		catch (e) {
		try {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")  // For Microsoft IE 6.0+
		}
		catch (e2) {
		xmlHttp = false   // No Browser accepts the XMLHTTP Object then false
		}
		}
		if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
		xmlHttp = new XMLHttpRequest();        //For Mozilla, Opera Browsers
	}
	return xmlHttp;  // Mandatory Statement returning the ajax object created
}

var xmlhttp = new getXMLObject();  //xmlhttp holds the ajax object
var output;
function getContent(tableId) {
	var getdate = new Date();  //Used to prevent caching during ajax call
	if(xmlhttp) { 
	  var params = "tableid="+tableId;
	  xmlhttp.open("GET","http://sheetstotables.com/read.php?"+params,true);
	  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	  xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			output = xmlhttp.responseText;
		element.innerHTML = output
		}
	  }
		xmlhttp.send(params);
	}
}
var element = document.getElementsByClassName("sheetstotables")[0];
getContent(tableId);

//analytics
  //(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  //(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 // })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  //ga('create', 'UA-49993054-2', 'auto');
  //ga('send', 'pageview');