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
		window.open("chrome://mozapps/content/extensions/extensions.xul","Extension manager","chrome, width=800, height=600");
	});
	var about=document.getElementById("menu-about");
	about.addEventListener("command",function(){
		window.openDialog("chrome://divwiki/content/about.xul","About DivWiki","chrome, width=600, height=300");
	});
	var start=document.getElementsByClassName("start");
	for(var i=0;i<start.length;i++)
	{
		start[i].addEventListener("command",function(){
			window.openDialog("chrome://divwiki/content/wizard.xul","Wizard","chrome, width=600, height=400");
		});
	}
	var home=document.getElementById("home");
	home.addEventListener("command",function(){
		var origin=document.getElementById("home-label").getAttribute("label");
		document.getElementById("wiki").setAttribute("src",origin);
	});
	var settings=document.getElementById("menu-settings");
	settings.addEventListener("command",function(){
		window.openDialog("chrome://divwiki/content/options.xul","Settings","chrome, width=600, height=300");
	});
	var jsconsole=document.getElementById("menu-jsconsole");
	jsconsole.addEventListener("command",function(){
		window.openDialog("chrome://global/content/console.xul","JavaScript console","chrome, width=600, height=400");
	});
});
