var stage = new createjs.Stage("demoCanvas");
var background = new createjs.Bitmap("img/background.png");
var townsNumber = 10;
var towns = new TownsMap(townsNumber);
var greedyAlgorithm = new Greedy(towns);

function calculateDistance(townAx,townAy,townBx,townBy){
		var dx = townAx - townBx;
		var dy = townAy - townBy;
		var dist = Math.sqrt(dx*dx + dy*dy);
		return dist;
}

function start(){
	stage.addChild(background);
	for(var i = 0; i<townsNumber;i++)
		stage.addChild(towns.map[i].townShape);
	console.log("tadam");
	createjs.Ticker.addEventListener("tick", handleTick);
	stage.update();
}

function handleTick(){
	var connnection = greedyAlgorithm.makeStep(stage);
	console.log(connnection[0]+" "+connnection[1]);
	if(connnection[1] != -1){
		if(connnection[2] == true)
			stage.removeChildAt(stage.numChildren-1);
		var A = connnection[0];
		var B = connnection[1];
		var line = new createjs.Shape();
		line.graphics.setStrokeStyle(1);
		line.graphics.beginStroke("red");
		line.graphics.moveTo(towns.map[A].townShape.x, towns.map[A].townShape.y);
		line.graphics.lineTo(towns.map[B].townShape.x, towns.map[B].townShape.y);
		line.graphics.endStroke();
		stage.addChild(line);}
	
	
	stage.update();
}
