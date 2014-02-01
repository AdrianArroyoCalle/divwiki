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
	var menuextension=document.getElementById("menu-extension");
	menuextension.addEventListener("command",function(){
		window.open("chrome://mozapps/content/extensions/extensions.xul","Extension manager","chrome, width=600, height=300");
	});
});
