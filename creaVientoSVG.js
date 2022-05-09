function creaVientoSVG(forescast24hs){
    const contenedor = document.querySelector("#graficaViento")
    for(let i = 0; i < 8; i++){
        const articulo = document.createElement("article")
        const img = document.createElement("img")
        const texto = document.createElement("p")

        texto.textContent = Math.round(forescast24hs[i].viento.velocidad) + " Km/h"
        img.src = "img/svg-icons/arrow-down.svg"
        img.style.transform = `rotate(${forescast24hs[i].viento.direccion}deg)`


        articulo.appendChild(texto)
        articulo.appendChild(img)
        contenedor.appendChild(articulo)
    }
    console.log(contenedor)
}