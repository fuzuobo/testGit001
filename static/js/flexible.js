!function(win, doc){ 
    var html = doc.documentElement;
    function setHtmlFontSize() { 
        var fontsize = html.clientWidth / 7.5; 
        html.style.fontSize = fontsize + "px";
    }
    function setBodyFontSize(){ 
        doc.body ? doc.body.style.fontSize = "16px" : doc.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
    win.addEventListener("resize", setHtmlFontSize);
    setBodyFontSize();
    setHtmlFontSize()
}(window, document)