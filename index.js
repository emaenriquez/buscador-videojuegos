const conenedor = document.querySelector('.contenedor')


let nombre_videojuegos;
let genero_videojuegos;
let descripcion_videojuegos;
let plataforma_videojuegos;
let imagen_videojueguegos;
let div_contenedor;

async function games(){
    
    const get_games = await fetch (` https://www.freetogame.com/api/games`)
    
    const json_games = await get_games.json()
    //console.log(json_games)
    mostrar_juegos(json_games)
    filtrarDatos(json_games)

}
/* esta funcion sirvar para mostrar todos los elementos del videojuegos en la pantalla usando el dom */
function mostrar_juegos(games){
    games.forEach(item => {
        div_contenedor = document.createElement('div')
        
        imagen_videojueguegos =document.createElement('img')
        imagen_videojueguegos.src= `${item.thumbnail}`

        nombre_videojuegos = document.createElement('p')
        nombre_videojuegos.innerHTML = `titulo: ${item.title}`

        genero_videojuegos = document.createElement('p')
        genero_videojuegos.innerHTML = `genero: ${item.genre}`

        descripcion_videojuegos = document.createElement('p')
        descripcion_videojuegos.innerHTML = `descripcion: ${item.short_description}`

        plataforma_videojuegos = document.createElement('p')
        plataforma_videojuegos.innerHTML = `plataforma: ${item.platform}`

        div_contenedor.appendChild(imagen_videojueguegos)
        div_contenedor.appendChild(nombre_videojuegos)
        div_contenedor.appendChild(genero_videojuegos)
        div_contenedor.appendChild(descripcion_videojuegos)
        div_contenedor.appendChild(plataforma_videojuegos)

        conenedor.appendChild(div_contenedor)
    });
}


/*
    ?platform=pc
    let filtrados_plataforma = json_games.filter(item=>item.platform.includes('PC '))
    
    hacer una funcion para los generos de videojuegos podemos hacerlo con un input checkbox
    "MMOARPG" "ARPG" "Strategy" "Card Game" Fighting Action RPG Battle Royale Sports Social MMO MMORPG ARPG MOBA Racing Fantasy
    let filtrados_generos = json_games.filter(item=>item.genre.includes('Shooter'))
*/
games()
