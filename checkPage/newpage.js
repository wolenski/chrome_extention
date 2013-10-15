var prefix;
chrome.extension.sendRequest( {method: "RedirectServer"}, function(response) { prefix = response.status; } );

function newPage() {
	var url = prefix + document.location.href;
	window.open(url, '_blank');
}