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
	this.justPrintedGoodEdge = false;
	this.visited[0] = true;
	for(var i = 1; i < this.matrixDim; i++){
		this.visited[i] = false;
	}

 	this.makeStep = function(stage){
 		
 		//Checking whether all the cities were already visited or not.
 		if(this.visitedCount < this.matrixDim){
 			//If checked all cities go to the next city
 			if(this.nextToCheck > this.matrixDim - 1){
 				this.visited[this.nextToGo] = true;
 				var buf = this.currentTown;
 				this.currentTown = this.nextToGo;
 				this.nextToCheck = 0;
 				this.shortestDistInStep = 999999;
 				this.visitedCount++;
 				console.log("tutaj");
 				this.justPrintedGoodEdge = true;
 				return [buf,this.nextToGo,true];
 			}
 		
 			while( (this.nextToCheck == this.currentTown || this.visited[this.nextToCheck] == true) && this.nextToCheck < this.matrixDim-1){
 					this.nextToCheck++;
 			}
 			
 			if( this.distMatrix[this.currentTown][this.nextToCheck] < this.shortestDistInStep){
 				this.shortestDistInStep = this.distMatrix[this.currentTown][this.nextToCheck];
 				this.nextToGo = this.nextToCheck;
 				this.nextToCheck++;
 				console.log("albo tu");
 				if(this.justPrintedGoodEdge)
 					return [this.currentTown, this.nextToGo,false];
 				else{
 					this.justPrintedGoodEdge = false;
 					return [this.currentTown, this.nextToGo,true];
 				}
 			}
 			else{
 				var buf = this.nextToCheck;
 				this.nextToCheck++;
 				console.log("a moze tu");
 				if(this.justPrintedGoodEdge)
 					return [this.currentTown, buf,false];
 				else{
 					this.justPrintedGoodEdge = false;
 					return [this.currentTown, buf,true];
 				}
 			}	
 		}
 		return [-1,-1];
 	}
}

