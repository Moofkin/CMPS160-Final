function loadModel(triArray, polyArray, coordArray){
	for(var i = 0; i < coordArray.length; i++){
		triArray.vertices.push(new THREE.Vector3(coordArray[i][0], coordArray[i][1], coordArray[i][2]));
	}
	for(var i = 0; i < polyArray.length; i++){
		for(var j = 3; j < polyArray[i].length; j++){
			var vert1 = [polyArray[i][1]-1];
			var vert2 = [polyArray[i][j-1]-1];
			var vert3 = [polyArray[i][j]-1];
			triArray.faces.push(new THREE.Face3(vert1, vert2, vert3));
		}
	}
	triArray.verticesNeedUpdate = true;
	triArray.elementsNeedUpdate = true;
	/*for(var i = 0; i < polyArray.length; i++){
		for(var j = 3; j < polyArray[i].length; j++){
			var vert1 = coordArray[polyArray[i][1]-1];
			var vert2 = coordArray[polyArray[i][j-1]-1];
			var vert3 = coordArray[polyArray[i][j]-1];
			triArray.push(new THREE.Vector3(coordArray[vert1], coordArray[vert2], coordArray[vert3]));
		}
	}*/
	return;
}
