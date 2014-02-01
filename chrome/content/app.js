/*
* app.js
*/
function quit()
{
	var appStartup = Components.classes['@mozilla.org/toolkit/app-startup;1'].getService(Components.interfaces.nsIAppStartup);
	var quitSeverity = Components.interfaces.nsIAppStartup.eAttemptQuit; //Components.interfaces.nsIAppStartup.eForceQuit :
                                  //Components.interfaces.nsIAppStartup.eAttemptQuit;
	appStartup.quit(quitSeverity);
}
