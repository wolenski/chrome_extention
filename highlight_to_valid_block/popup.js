chrome.tabs.getSelected(null, function(tab) {
	try {
		chrome.tabs.executeScript(null,{file:"jquery-1.9.1.js"});
		chrome.tabs.executeScript(null,{file:"jquery-ui.css"});
		chrome.tabs.executeScript(null,{file:"jquery-ui.js"});
		chrome.tabs.executeScript(tab.id, {	file: "xpathOnClick.js" }, function() {
			chrome.tabs.executeScript(tab.id, {	code: "onClickIcon();" }, function() {
				document.getElementById('msg').innerText = "Click to add box around certain blocks";
			});
		});
	} catch (err) {
		document.getElementById('msg').innerText = "Error: " + err.message;
	}
});
