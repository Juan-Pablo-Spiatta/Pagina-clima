function creaPrecipitacionesSVG(forescast24hs){
    const contenedor = document.getElementById("graficaLluvia")
    for(let i = 0; i < 8; i++){
        const articulo = document.createElement("article")
        const texto = document.createElement("p")
        const div = document.createElement("div")

        texto.textContent = Math.round(forescast24hs[i].probLluvia * 100) +"%"
        div.style.height = `${100 * forescast24hs[i].probLluvia}%`

        articulo.appendChild(texto)
        articulo.appendChild(div)
        contenedor.appendChild(articulo)
    }
}