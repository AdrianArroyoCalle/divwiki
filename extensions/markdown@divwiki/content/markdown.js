/*
* markdown.js
*/
function installMarkdown()
{
	var text=this.responseText;
	var converter=new Showdown.converter();
	var html=converter.makeHtml(text);
	var css="<style>@import url(chrome://markdown/content/markdown.css);</style>"
	var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
	var mainWin = wm.getMostRecentWindow("divwiki:wiki");
	var wiki=mainWin.document.getElementById("wiki");
	wiki.setAttribute("src","data:text/html, "+css+html);
	var home=mainWin.document.getElementById("home-label");
	home.setAttribute("label","data:text/html, "+css+html);
}
function markdown()
{
	var url=document.getElementById("url").value;
	var xhr=new XMLHttpRequest();
	xhr.onload=installMarkdown;
	xhr.open("GET",url,false);
	xhr.send();
}