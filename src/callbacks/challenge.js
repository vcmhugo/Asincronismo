//const xmlhttpresqutes = require('xmlhttprequest');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";


function fetchData(urlApi,callback){
    
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET',urlApi, true);

    xhttp.onreadystatechange = function(event) { //escucha diferentes estados de la solicitud y conocer cuando está disponible la información
        if(xhttp.readyState === 4) { //si el estado ha sido completada la llamada
            if(xhttp.status === 200 ){ //el servido responde de forma correcta
                callback(null, JSON.parse(xhttp.responseText)); //dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error,null); //es null porque no se está regresando ningún dato
        }
        }

        xhttp.send();

}

fetchData(`${API}/products/40}`, function(error2,data2){

        if(error2) console.error(error2);
        console.log(data2);
 
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3,data3){

            if(error3) console.error(error3);

            //console.log(data1[0][0]);
            console.log(data2.title);
            console.log(data3.name);
        
        })      
})