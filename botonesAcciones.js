const botones = document.querySelectorAll("button");

window.addEventListener('load', function(){
    botones[0].click()
})

botones[0].addEventListener('click', function(){
    botones[0].style.width = "auto"
    botones[1].style.width = "25px"
    botones[2].style.width = "25px"

    document.getElementById("graficaTemperatura").style.height = "auto"
    document.getElementById("graficaLluvia").style.height = "0"
    document.getElementById("graficaViento").style.height = "0"

    botones[0].style.borderBottom = "solid orange 2px "
    botones[1].style.borderBottom = "solid white 2px "
    botones[2].style.borderBottom = "solid white 2px "

})
botones[1].addEventListener('click', function(){
    botones[0].style.width = "25px"
    botones[1].style.width = "auto"
    botones[2].style.width = "25px"

    document.getElementById("graficaTemperatura").style.height = "0"
    document.getElementById("graficaLluvia").style.height = "200px"
    document.getElementById("graficaViento").style.height = "0"

    botones[0].style.borderBottom = "solid white 2px "
    botones[1].style.borderBottom = "solid orange 2px "
    botones[2].style.borderBottom = "solid white 2px "
})
botones[2].addEventListener('click', function(){
    botones[0].style.width = "25px"
    botones[1].style.width = "25px"
    botones[2].style.width = "auto"

    document.getElementById("graficaTemperatura").style.height = "0"
    document.getElementById("graficaLluvia").style.height = "0"
    document.getElementById("graficaViento").style.height = "auto"
    
    botones[0].style.borderBottom = "solid white 2px "
    botones[1].style.borderBottom = "solid white 2px "
    botones[2].style.borderBottom = "solid orange 2px "
})