function Model(polyArray, coordArray){
	this.geometry = new THREE.Geometry;
	this.center = [];
	
	var xLargest = coordArray[0][0], xSmallest = coordArray[0][0], yLargest = coordArray[0][1], ySmallest = coordArray[0][1], zLargest = coordArray[0][2], zSmallest = coordArray[0][2];
	for(var i = 0; i < coordArray.length; i++){
		this.geometry.vertices.push(new THREE.Vector3(coordArray[i][0], coordArray[i][1], coordArray[i][2]));
		if (coordArray[i][0] > xLargest)
			xLargest = coordArray[i][0];
		if (coordArray[i][0] < xSmallest)
			xSmallest = coordArray[i][0];
		if (coordArray[i][1] > yLargest)
			yLargest = coordArray[i][1];
		if (coordArray[i][1] < ySmallest)
			ySmallest = coordArray[i][1];
		if (coordArray[i][2] > zLargest)
			zLargest = coordArray[i][2];
		if (coordArray[i][2] < zSmallest)
			zSmallest = coordArray[i][2];
	}
	for(var i = 0; i < polyArray.length; i++){
		for(var j = 3; j < polyArray[i].length; j++){
			var vert1 = [polyArray[i][1]-1];
			var vert2 = [polyArray[i][j-1]-1];
			var vert3 = [polyArray[i][j]-1];
			this.geometry.faces.push(new THREE.Face3(vert1, vert2, vert3));
		}
	}
	
	this.center[0] = xLargest + xSmallest;
	this.center[1] = yLargest + ySmallest;
	this.center[2] = zLargest + zSmallest;
	this.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0-this.center[0], 0-this.center[1], 0-this.center[2]));
	
	var trueLargest = Math.max(xLargest, Math.max(Math.abs(xSmallest), Math.max(yLargest), Math.max(Math.abs(ySmallest), Math.max(zLargest, Math.abs(zSmallest)))));
	var scalar = 30 / trueLargest;
	this.geometry.applyMatrix( new THREE.Matrix4().makeScale( scalar, scalar, scalar ) );
};
