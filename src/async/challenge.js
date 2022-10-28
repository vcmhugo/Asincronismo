import fetch from 'node-fetch';

const API = "https://api.escuelajs.co/api/v1";



/* const productos = async(urlApi)=>{
    const response = await fetch(urlApi); //fecth se refiere a una promesa
    const data = response.json(); //debemos transformar la llamada en json para poder usar esos datos
    console.log(data);
    return data
} */

/* async function fecthData() {

    const response = await fetch(`${API}/products`); //fecth se refiere a una promesa
    const productos = await response.json(); //debemos transformar la llamada en json para poder usar esos datos
    console.log(productos);
    //return data; // los devolvemos ya transformados
    const categories =  await fetch(API+'/products/'+productos[1].id);
    const dataCategories =  await categories.json();
    console.log(dataCategories);
    const nameCategories = await fetch(API+'/categories/'+dataCategories.category.id);
    const category = await nameCategories.json();
    console.log(category);
    console.log(`id: ${category.id} name: ${category.name}`);
    
  }
 */
  ///con funcion arrow

 const fecthData = async()=> {

    const response = await fetch(`${API}/products`); //fecth se refiere a una promesa
    const productos = await response.json(); //debemos transformar la llamada en json para poder usar esos datos
    console.log(productos);
    //return data; // los devolvemos ya transformados
    const categories =  await fetch(API+'/products/'+productos[1].id);
    const dataCategories =  await categories.json();
    console.log(dataCategories);
    const nameCategories = await fetch(API+'/categories/'+dataCategories.category.id);
    const category = await nameCategories.json();
    console.log(category);
    console.log(`id: ${category.id} name: ${category.name}`);
    
  }


/* const datos = async()=>{
    try {

        const productos = await fecthData(`${API}/products`);
        console.log(productos);
        
    } catch (error) {
        console.log(error);
    }
} */

fecthData()
//datos();