/**
 * Created by Stephen on 2016-08-30.
 */

/*
 * logInfo : Manages writing of analytics loaded
 *
 * @param info: Data retrieved from selected table divs
 *
 * */
function logInfo(info) {
    var sum = 0;
    for (i = 0; i < info.length; i++) {
        sum += parseFloat(info[i].replace(/[^0-9\.]+/g, ""));
    }
    document.getElementById("resultDiv").innerHTML=sum;
}

function startWatch() {
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        },
        function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {subject: 'startWatch'},
                function () {
                    console.log("started")
                }
            );
        })
}

function endWatch() {
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        },
        function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {subject: 'endWatch'},
                function () {
                    console.log("stopped")
                }
            );
        })
}

function sum(){
    chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        },
        function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {subject: 'sum'},
                logInfo
            );
        })
}
$(document).ready(function () {
    $("#startButton").on("click", startWatch);
    $("#endButton").on("click", endWatch);
    $("#sum").on("click", sum);
});