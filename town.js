function Town(x,y,id){
	this.townShape = new createjs.Shape();
	this.townShape.graphics.beginFill("black").drawCircle(0,0,2).endFill();
	this.townShape.x = x - 2;
	this.townShape.y = y - 2;
	this.ID = id;
}