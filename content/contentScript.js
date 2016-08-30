function toObjectArray(object){
    var array=[];
    for (i = 0; i < object.length; i++){
        array[i] = object[i];
    }
    return array
}

chrome.runtime.onMessage.addListener(
    function (msg, sender, sendResponse) {
        var responseNodes = document.getElementsByClassName("tableAnalyticsSelected");
       var responseArr = [];
        for (i = 0; i < responseNodes.length; i++){
            responseArr.push(responseNodes[i].innerHTML)
        }
        console.log(responseArr);
        sendResponse(responseArr);
    }
);

function containsClass(element, cls){
    return (' '+element.className+' ').indexOf(' '+cls+' ')>-1;
}

function removeClass(element, cls){
    var regx = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    element.className = element.className.replace(regx,' ');
}

$(document).ready(function () {
    var tdNodes = document.getElementsByTagName("TD");
    for (i = 0; i < tdNodes.length; i++) {
        tdNodes[i].addEventListener('click', function () {
            if (containsClass(this, "tableAnalyticsSelected")){
                removeClass(this, "tableAnalyticsSelected");
            }else {
                this.className = "tableAnalyticsSelected";
            }
        })
    }
});