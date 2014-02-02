pref("toolkit.defaultChromeURI","chrome://divwiki/content/main.xul");
pref("toolkit.singletonWindowType","divwiki:wiki");

pref("browser.dom.window.dump.enabled", true);
pref("javascript.options.showInConsole", true);
pref("javascript.options.strict", true);
pref("nglayout.debug.disable_xul_cache", true);
pref("nglayout.debug.disable_xul_fastload", true);

pref("xpinstall.dialog.confirm", "chrome://mozapps/content/xpinstall/xpinstallConfirm.xul");
pref("xpinstall.dialog.progress.skin", "chrome://mozapps/content/extensions/extensions.xul?type=themes");
pref("xpinstall.dialog.progress.chrome", "chrome://mozapps/content/extensions/extensions.xul?type=extensions");
pref("xpinstall.dialog.progress.type.skin", "Extension:Manager-themes");
pref("xpinstall.dialog.progress.type.chrome", "Extension:Manager-extensions");
pref("extensions.update.enabled", true);
pref("extensions.update.interval", 86400);
pref("extensions.dss.enabled", false);
pref("extensions.dss.switchPending", false);
pref("extensions.ignoreMTimeChanges", false);
pref("extensions.logging.enabled", false);
pref("general.skins.selectedSkin", "WikiTheme/0.1");
pref("extensions.update.url", "chrome://mozapps/locale/extensions/extensions.properties");
pref("extensions.getMoreExtensionsURL", "chrome://mozapps/locale/extensions/extensions.properties");
pref("extensions.getMoreThemesURL", "chrome://mozapps/locale/extensions/extensions.properties");
pref("extensions.getAddons.search.url","http://github.com/AdrianArroyoCalle/divwiki/raw/master/extensions/search.xml");

pref("wiki.extension-manager.uri","chrome://mozapps/content/extensions/extensions.xul");
pref("wiki.js-console.uri","chrome://global/content/console.xul");
pref("wiki.config.uri","chrome://global/content/config.xul");

pref("browser.download.useDownloadDir", true);
pref("browser.download.folderList", 0);
pref("browser.download.manager.showAlertOnComplete", true);
pref("browser.download.manager.showAlertInterval", 2000);
pref("browser.download.manager.retention", 2);
pref("browser.download.manager.showWhenStarting", true);
pref("browser.download.manager.useWindow", true);
pref("browser.download.manager.closeWhenDone", true);
pref("browser.download.manager.openDelay", 0);
pref("browser.download.manager.focusWhenStarting", false);
pref("browser.download.manager.flashCount", 2);
pref("alerts.slideIncrement", 1);
pref("alerts.slideIncrementTime", 10);
pref("alerts.totalOpenTime", 4000);
pref("alerts.height", 50);

pref("signon.rememberSignons", true);
pref("signon.expireMasterPassword", false);
pref("signon.SignonFileName", "signons.txt");

pref("app.update.enabled", true);
pref("app.update.auto", true);
pref("app.update.mode", 2);
pref("app.update.silent", false);
pref("app.update.url", "https://github.com/AdrianArroyoCalle/divwiki/raw/master/updates.xml");
pref("app.update.url.manual", "http://github.com/AdrianArroyoCalle/divwiki/releases");
pref("app.update.url.details", "http://github.com/AdrianArroyoCalle/divwiki");
pref("app.update.interval", 86400);
pref("app.update.nagTimer.download", 86400);
pref("app.update.nagTimer.restart", 1800);
pref("app.update.timer", 600000);
pref("app.update.showInstalledUI", false);
pref("app.update.incompatible.mode", 0);
