function createMainUI(domWin)
{
	var document=domWin.document;
	var helppopup=document.getElementById("help-popup");
	if(helppopup!=null)
	{
		var menuitem=document.createElement("menuitem");
		menuitem.setAttribute("id","help-markdown");
		menuitem.setAttribute("label","Markdown");
		menuitem.addEventListener("command",function(){
			domWin.openDialog("chrome://markdown/content/about.xul");
		});
		helppopup.appendChild(menuitem);
	}
	var wikiProviders=document.getElementById("wiki-providers");
	if(wikiProviders!=null)
	{
		var listitem=document.createElement("listitem");
		listitem.setAttribute("id","wiki-provider-markdown");
		listitem.setAttribute("label","Default Markdown wiki");
		listitem.setAttribute("value","markdown");
		wikiProviders.appendChild(listitem);
	}
}
function startup()
{
	let wm=Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
	var ui={
		onOpenWindow: function(win)
		{
			let domWin=win.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIDOMWindow);
			domWin.addEventListener("load",function(){
				domWin.removeEventListener("load", arguments.callee, false);
				createMainUI(domWin);
			});
		},
		onCloseWindow: function(win){},
		onWindowTitleChange: function(win, title){}
	};
	let windows = wm.getEnumerator(""); //keep it void for all windows
	while (windows.hasMoreElements()) {
		let domWin = windows.getNext().QueryInterface(Components.interfaces.nsIDOMWindow);
		createMainUI(domWin);
	}
	wm.addListener(ui);
}
function shutdown()
{

}
function install()
{

}
function uninstall()
{

}