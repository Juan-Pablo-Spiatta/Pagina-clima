function creaTemperaturaSVG(forescast24hs){
    const grafica = document.querySelector("#graficaTemperatura > polyline")
    grafica.setAttribute("height", "200px")
    grafica.setAttribute("points", `-40,240 -20,${100 - (Math.round(forescast24hs[0].temperatura))} 0,${100 - (Math.round(forescast24hs[0].temperatura))} 10,${100 - (Math.round(forescast24hs[0].temperatura))} 100,${100 - (Math.round(forescast24hs[1].temperatura))} 200,${100 - (Math.round(forescast24hs[2].temperatura))} 300,${100 - (Math.round(forescast24hs[3].temperatura))} 400,${100 - (Math.round(forescast24hs[4].temperatura))} 500,${100 - (Math.round(forescast24hs[5].temperatura))} 600,${100 - (Math.round(forescast24hs[6].temperatura))} 690,${100 - (Math.round(forescast24hs[7].temperatura))} 700,${100 - (Math.round(forescast24hs[7].temperatura))} 720,${100 - (Math.round(forescast24hs[7].temperatura))} 740,240 0,240`)

    const svg = document.querySelector("#graficaTemperatura")
    const SVG_NS = "http://www.w3.org/2000/svg"

    for (let x = 0; x <= 7; x++) {
        let num = document.createElementNS(SVG_NS, "text")
        num.setAttribute("y", `${90 - (forescast24hs[x].temperatura)}`)
        num.textContent = Math.round(forescast24hs[x].temperatura) + "°"
        num.setAttribute("font-size", "16px")
        num.setAttribute("fill", "white")
        if(x == 0 || x == 7){
            if(x == 0){
                num.setAttribute("x", "2px")
            }else{
                num.setAttribute("x", "678px")
            }
        }else{
            num.setAttribute("x", `${(x * 100) - 8}`)
        }
        svg.appendChild(num)
    }   
    for (let x = 0; x <= 7; x++) {
        if((hora + x * 3) > 23){
            document.getElementById("hora" + x).textContent = (hora + x * 3) - 24 + ":00"
        }else{
            document.getElementById("hora" + x).textContent = hora + x * 3 + ":00"
        }
    }
}