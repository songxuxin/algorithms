const addLevelToTree = function(node, level){
	if(!node){
		return;
	}
	node.level = level;
	if(!node.children){
		return;
	}
	node.children.forEach((child) => {
		addLevelToTree(child, level+1);
	});
}


let a = {
	"label": "1",
	"children": [
			{
				"label": "1.1",
				"children": [
					{
						"label": "1.1.1"
					}]
			},
			{"label": "1.2"}
			
	]
}

addLevelToTree(a,1);

console.log(JSON.stringify(a));