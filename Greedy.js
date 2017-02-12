var MAX_DIST = 999999999;
function Greedy(towns){
	
	this.townsMap = towns;
	this.matrixDim = towns.mapSize;
	this.distMatrix = new Array(this.matrixDim);
	
	for(var i = 0; i < this.matrixDim; i++){
		this.distMatrix[i] = new Array(this.matrixDim);
		for(var j = 0; j < this.matrixDim; j++){
			this.distMatrix[i][j] = calculateDistance(towns.map[i].townShape.x, towns.map[i].townShape.y,towns.map[j].townShape.x, towns.map[j].townShape.y);			
			console.log(this.distMatrix[i][j]);
		}
	}

	this.currentTown = 0;
	this.nextToCheck = 1;
	this.nextToGo = 0;
	this.visited = new Array(this.matrixDim);
	this.visitedCount = 0;
	this.totalLength = 0;
	this.shortestDistInStep = 9999999;
	this.visited[0] = true;
	for(var i = 1; i < this.matrixDim; i++){
		this.visited[i] = false;
	}

 	this.makeStep = function(stage){
 		
 		//Checking whether all the cities were already visited or not.
 		if(this.visitedCount < this.matrixDim){
 			//If checked all cities go to the next city
 			if(this.nextToCheck > this.matrixDim - 1){

				var Ax = this.townsMap.map[this.currentTown].townShape.x;
				var Ay = this.townsMap.map[this.currentTown].townShape.y;
				var Bx = this.townsMap.map[this.nextToGo].townShape.x;
				var By = this.townsMap.map[this.nextToGo].townShape.y;

				if(this.visitedCount < this.matrixDim-1)
					stage.removeChildAt(stage.numChildren-1);
				drawLine(stage, Ax, Ay, Bx, By);

				//Set the city to move to as visited
 				this.visited[this.nextToGo] = true;
 				this.currentTown = this.nextToGo;
 				this.nextToCheck = 0;
 				this.shortestDistInStep = MAX_DIST;
 				this.visitedCount++;
 				return;
 			}
 		
 			// While next town to check is the current town or it has already been visited, check the next one.
 			while( this.nextToCheck == this.currentTown || this.visited[this.nextToCheck] == true){
 					this.nextToCheck++;
 					if(this.nextToCheck >= this.matrixDim)
 						return;
 			}
 			
 			//Check if this edge is shorter then currently shortest
 			if( this.distMatrix[this.currentTown][this.nextToCheck] < this.shortestDistInStep ){
 				
 				var Ax = this.townsMap.map[this.currentTown].townShape.x;
				var Ay = this.townsMap.map[this.currentTown].townShape.y;
				var Bx = this.townsMap.map[this.nextToCheck].townShape.x;
				var By = this.townsMap.map[this.nextToCheck].townShape.y;

			
 				if(this.shortestDistInStep == MAX_DIST){
 					drawLine(stage, Ax, Ay, Bx, By);
 				}else{
 					stage.removeChildAt(stage.numChildren-1);
 					drawLine(stage, Ax, Ay, Bx, By);	
 				}

 				//Remember this distance as the currently shortest
 				this.shortestDistInStep = this.distMatrix[this.currentTown][this.nextToCheck];
 				//Set currently best next town as this town.
 				this.nextToGo = this.nextToCheck;
 				//Increment to check the next town
 				this.nextToCheck++;
 				
 			}
 			else{
 				var Ax = this.townsMap.map[this.currentTown].townShape.x;
				var Ay = this.townsMap.map[this.currentTown].townShape.y;
				var Bx = this.townsMap.map[this.nextToCheck].townShape.x;
				var By = this.townsMap.map[this.nextToCheck].townShape.y;
				if(this.shortestDistInStep == MAX_DIST){
 					drawLine(stage, Ax, Ay, Bx, By);
 				}else{
 					stage.removeChildAt(stage.numChildren-1);
 					drawLine(stage, Ax, Ay, Bx, By);	
 				}
 				this.nextToCheck++;
 			}	
 		}
 		return;
 	}
}

