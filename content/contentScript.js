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
    console.log("start");
    var tdNodes = document.getElementsByTagName("TD");
    for (i = 0; i < tdNodes.length; i++) {
        setNodes(tdNodes[i]);
    }
}

function endWatch() {
    console.log("stop");
    var tdNodes = document.getElementsByTagName("TD");
    for (i = 0; i < tdNodes.length; i++) {
        $( tdNodes[i]).on('click', function(){});
    }
}

function setNodes(node){

    node.addEventListener('click', function () {
        console.log(node);
        if (containsClass(node, "tableAnalyticsSelected")) {
            removeClass(node,"tableAnalyticsSelected");
        }else{
            node.className += "tableAnalyticsSelected";
        }
    })
}