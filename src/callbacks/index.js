const suma = (num1,num2)=>{
    return num1+num2;
}

const call = (num1,num2, callback)=>{
    return callback(num1,num2);
}


console.log(call(1,2,suma));

setTimeout(()=>{
    console.log('hola JS')
},2000);


const saludo = (nombre)=>{
    console.log(`hola ${nombre}`);
}

setTimeout(saludo,2000,'hugoss');