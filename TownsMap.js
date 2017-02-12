function TownsMap(townsNum) {

	this.map = new Array(townsNum);
	this.mapSize = townsNum;
	for(var i = 0; i < townsNum; i++){
		var coords = randomCoords();
		this.map[i] = new Town(coords[0],coords[1],i);
	}
}

function randomCoords(){
	var x = 4 + Math.random()*(stage.canvas.width-8);
	var y = 4 + Math.random()*(stage.canvas.height-8);
	return [x,y];
}