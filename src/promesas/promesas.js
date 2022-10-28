const funcions = ()=>{
	
	return new Promise((resolve, reject)=>{

				resolve('hey!');
	
	})

}

funcions().then((result)=>{

    console.log(result);
});



const cows = 2;

const countCows = ()=>{
	return new Promise((resolve, reject)=>{

		if(cows>10){
			resolve('Son suficientes');
		}else{
			reject('No son suficientes');
		}

	})
}

countCows().then((response)=>{
	console.log(response);
}).catch((Error)=>{
	console.log(Error);
}).finally(()=>console.log('finally'))