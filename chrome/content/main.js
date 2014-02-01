/*
* main.js
*/
window.addEventListener("load",function(){
	var exit=document.getElementById("exit");
	exit.addEventListener("command",quit);
	var menuconfiguration=document.getElementById("menu-configuration");
	menuconfiguration.addEventListener("command",function(){
		window.open("chrome://global/content/config.xul","Advanced configuration","chrome, width=600, height=300");
	});
});
