for (var j = 1; j < 7; j +=1 ) {
    var tag = "h" + j ;
    var e = document.getElementsByTagName(tag);
    for (var i = 0; i < e.length; i += 1) {
        if (e[i].hasAttribute("id")) continue;
        var idStr = e[i].innerHTML.toLowerCase().replace(/[\s*+?^=!:${}()|[\]\/\\]/g,"").replace(/<.*>(.*)<.*>/g, '$1');
        e[i].setAttribute("id",idStr);
    }
}
