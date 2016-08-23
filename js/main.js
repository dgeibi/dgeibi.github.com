// from http://stackoverflow.com/a/4425214
var links = document.links;
for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   }
}

// add table-wrapper
var tables = document.getElementsByTagName("table");
for (var i = 0, len = tables.length; i < len; i++) {
	var div = document.createElement("div");
	div.className = "table-wrapper";
	var range = document.createRange();
	range.selectNode(tables[i]);
	range.surroundContents(div);
}
