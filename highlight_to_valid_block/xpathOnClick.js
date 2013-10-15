function change_node_style(node, style_name,color){
    console.log(node);
    if(style_name == "outline"){
	    var current_style = node.style.border;
		if(current_style == "thick solid " + color){
			node.style.border = "";
		}else{
			node.style.border = "thick solid " + color;
		}
	} 
	if(style_name == "border"){	
		var current_style = node.style.border;
		if(current_style ==  "thick solid " + color){
			node.style.border = "";
		}else{
			node.style.border = "thick solid " + color;
		}
	} 
}

function change_style_by_class_name(class_name,style_name,color){
	var nodes = document.getElementsByClassName(class_name);
	for(var i=0; i<nodes.length; i++){
	    change_node_style(nodes[i],style_name,color);
	}
}

function onClickIcon(){
    console.log("start")
	// var class_name = "tc-clear";
    // change_style_by_class_name(class_name,"outline","green");
	// class_name = "tc-float-left";
    // change_style_by_class_name(class_name,"border","red");
	var class_name = "tc-normal-block";
    change_style_by_class_name(class_name,"border","red");
	
}