chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
            if (request.method == "RedirectServer")
                sendResponse({status: localStorage["prefix"]});
			else {
				if (request.method == "tplType") 
					sendResponse({status: localStorage["tplType"]});
				else sendResponse({});
			}
        });