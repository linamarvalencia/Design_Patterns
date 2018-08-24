/*Esta funcion permite obtener el valor del select de html(onchange)*/
function getValueType (paellaType){

	this.paellaType = paellaType;
}

function buildPaella(){

	var factory = executeFactory(this.paellaType.value);
	var paellaProduct = generatePaella(factory.type);
	console.log(paellaProduct);
}