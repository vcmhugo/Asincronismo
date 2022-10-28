import fetch from 'node-fetch';

const API = "https://api.escuelajs.co/api/v1";


function fetchData(urlAPI){
    return fetch(urlAPI);
}

/* fetchData(API+'/products').then(response=> response.json()).then(productos=>{
    console.log(productos);
}).catch(Error=>console.log(Error)); */


fetchData(API+'/products')
    .then(response=>response.json())
    .then(productos=>{
        return fetchData(API+'/products/'+productos[1].id)
            .then(response=>response.json())
            .then(producto=>{
                return fetchData(API+'/categories/'+producto.category.id)
                    .then(response=>response.json())
                    .then(categories=>{
                        console.log(categories.name);
                    })
            })
    })
    .catch(Error=>console.log(Error))
    .finally(()=>console.log('finalizo'));