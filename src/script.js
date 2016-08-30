/**
 * Created by Stephen on 2016-08-30.
 */

function logInfo(info) {
    var sum = 0;
    for (i = 0; i < info.length; i++) {
       sum += parseFloat(info[i].replace(/[^0-9\.]+/g, ""));
    }
    document.write(sum);
}

window.addEventListener('DOMContentLoaded', function () {
        chrome.tabs.query(
            {
                active: true,
                currentWindow:true
            },
            function (tabs) {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {subject: 'info'},
                    logInfo
                );
            })
    }
);