/*
* html.js
*/
function html()
{
	var url=document.getElementById("url").value;
	var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
	var mainWin = wm.getMostRecentWindow("divwiki:wiki");
	var wiki=mainWin.document.getElementById("wiki");
	wiki.setAttribute("src",url);
	var home=mainWin.document.getElementById("home-label");
	home.setAttribute("label",url);
}