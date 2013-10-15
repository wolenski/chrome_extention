function change_node_background_color(node, color){
    var current_color = node.style.backgroundColor;
	if(current_color == color){
	    node.style.backgroundColor = "inherit";
	}else{
	    node.style.backgroundColor = color;
	}
}

function change_background_color_by_class_name(class_name){
	var nodes = document.getElementsByClassName(class_name);
	for(var i=0; i<nodes.length; i++){
	    change_node_background_color(nodes[i],"yellow");
	}
}

function onClickIcon(){
    var class_name = "ssNormal";
    change_background_color_by_class_name(class_name);
}