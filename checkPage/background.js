chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
            if (request.method == "RedirectServer") {
				if (localStorage["prefix"] == undefined) {
					localStorage["prefix"] = "http://m.baidu.com/tc?m=8&src=";
				}
				if (localStorage["prefix"] == null) {
					localStorege["prefix"] = "http://m.baidu.com/tc?m=8&src=";
				}
                sendResponse({status: localStorage["prefix"]});
			}else
                sendResponse({});
        });