function save_options() {
	alert("sunhaowen");
	var prefix = document.getElementById("prefix").value;
	localStorage["prefix"] = prefix;
	alert(localStorage["prefix"]);
	var tplType = document.getElementById("tplType").value;
	localStorage["tplType"] = tplType;
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() { status.innerHTML = ""; }, 500);
};
function restore_options() {
	var prefix = localStorage["prefix"];
	if (prefix != null) {
		document.getElementById("prefix").value = prefix;
	}
	var tplType = localStorage["tplType"];
	if (tplType != null) {
		document.getElementById("tplType").value = tplType;
	}
} 
//document.addEventListener('DOMContentReady', restore_options);
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#Save').addEventListener('click', save_options);