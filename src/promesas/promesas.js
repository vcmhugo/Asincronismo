const funcions = ()=>{
	
	return new Promise((resolve, reject)=>{

				resolve('hey!');
	
	})

}

funcions().then((result)=>{

    console.log(result);
});