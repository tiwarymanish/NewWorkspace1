function name(){
	console.log("printeing");

	user(()=>{
		console.log("inside");
	});

}
name();