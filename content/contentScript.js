chrome.runtime.onMessage.addListener(
    function (msg, sender, sendResponse) {
        if (msg.subject == "startWatch") {
            startWatch();
        } else if (msg.subject == "endWatch") {
            endWatch();
        } else {
            var responseNodes = document.getElementsByClassName("tableAnalyticsSelected");
            var responseArr = [];
            for (i = 0; i < responseNodes.length; i++) {
                responseArr.push(responseNodes[i].innerHTML)
            }
            console.log(responseArr);
            sendResponse(responseArr);
        }
    }
);

function containsClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function removeClass(element, cls) {
    var regx = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    element.className = element.className.replace(regx, '');
}

function startWatch() {
    var isMouseDown = false, isHighlighted, Elem;
    $("body").mousedown(function (e) {
        Elem = e.target;
        isMouseDown = true;
        if (Elem.nodeName == 'TD') {
            $(Elem).toggleClass("tableAnalyticsSelected");
            isHighlighted = $(Elem).hasClass("tableAnaylticsSelected");
            return false;
        }
    }).mouseover(function (e) {
        Elem = e.target;
        if (Elem.nodeName == 'TD') {
            if (isMouseDown) {
                $(Elem).toggleClass("tableAnalyticsSelected");
            }
        }
    }).bind('selectstart',function(){//return false;
         });

    $(document).mouseup(function(){
        isMouseDown = false;
    });


}
