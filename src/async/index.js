const fncAsync = () =>{

    return new Promise((resolve,reject)=>{

        (true)
            ?setTimeout(()=>resolve('Async'),2000)
            :reject(new Error('Error!'));

    })

}


const anotherAsync =  async ()=>{

    const response = await fncAsync();

    console.log(response);
    console.log('hello!!');
}


console.log('before');
anotherAsync();
console.log('after');