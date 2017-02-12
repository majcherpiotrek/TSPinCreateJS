var stage = new createjs.Stage("demoCanvas");
var background = new createjs.Bitmap("img/background.png");
var townsNumber = 20;
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
	stage.update();
}

function drawLine(stage, Ax, Ay, Bx, By){
	var line = new createjs.Shape();
	line.graphics.setStrokeStyle(1);
	line.graphics.beginStroke("red");
	line.graphics.moveTo(Ax,Ay);
	line.graphics.lineTo(Bx,By);
	line.graphics.endStroke();
	stage.addChild(line);
}
