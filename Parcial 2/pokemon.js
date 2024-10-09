const api="https://pokeapi.co/api/v2/pokemon/";
const contenedor=document.querySelector("#contenedor");


//fetch consilta a una url mediante los verbos de  http


async function consultarPokemon(id)
{
    let consulta= await fetch(api+"/"+id);
    let datos= await consulta.json();
    dibujarPokemon(datos);
}


function CargarPokedex()
{
    for(let i=0;i<=151;i++)
    {
        consultarPokemon(i);
    }

}


function dibujarPokemon(datosPokemon)
{
    let rutaImagen=datosPokemon.sprites.other.home.front_default;
    let pokemon=`<h1>${datosPokemon.name}</h1>
                 <img src="${rutaImagen}"/>
                 <h1>${datosPokemon.types[0].type.name}</h1>`;

    let div= document.createElement('div');
    div.classList.add("caja");
    div.innerHTML=pokemon;
    contenedor.appendChild(div);
}

CargarPokedex();