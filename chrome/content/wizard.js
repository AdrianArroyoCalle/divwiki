/*
* wizard.js
*/
function finish()
{

}
function wikiProvider()
{
	var listbox=document.getElementById("wiki-providers");
	var wikiProvider=listbox.value;
	if(wikiProvider=="default-html")
	{
		//MODIFY WIZARD PAGES
		window.open("chrome://divwiki/content/default-html.xul","Default HTML","chrome, width=600, height=400");
	}else{
		var url="chrome://"+wikiProvider+"/content/start.xul";
		window.open(url,wikiProvider,"chrome, width=600, height=400");
	}
}