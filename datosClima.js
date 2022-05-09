const API_KEY = '994a0447652ad2a6004fd7e23d4a4283'
const units = ["satandar","metric","imperial"]
var unitSelect = units[1]

const fetchData = position => {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => setCurrentWeatherData(data))
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => setHistoryWeatherData(data))
}

const setCurrentWeatherData = data => {
    console.log(data);
    const currentWeatherData = {
        temperaturaActual: Math.round(data.main.temp),
        sensacion: Math.round(data.main.feels_like),
        descripcion: (data.weather[0].description),
        humedad: data.main.humidity,
        presion: data.main.pressure,
        viento: data.wind.speed,
        localidad: data.name,
        pais: definePais(data.sys.country),
    }

    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.getElementById("iconoClima").src = iconUrl

    Object.keys(currentWeatherData).forEach(key => {
        document.getElementById(key).textContent = currentWeatherData[key]
    });
}



const setHistoryWeatherData = data => {
    console.log(data);
    //El pronostico de 24hs es cada 4hs apartir del horario actual
    const forescast24hs = [
        {
            temperatura: data.hourly[0].temp,
            viento: {
                velocidad: data.hourly[0].wind_speed,
                direccion: data.hourly[0].wind_deg
            }
        },
        {
            temperatura: data.hourly[3].temp,
            viento: {
                velocidad: data.hourly[3].wind_speed,
                direccion: data.hourly[3].wind_deg
            }
        },
        {
            temperatura: data.hourly[6].temp,
            viento: {
                velocidad: data.hourly[6].wind_speed,
                direccion: data.hourly[6].wind_deg
            }
        },
        {
            temperatura: data.hourly[9].temp,
            viento: {
                velocidad: data.hourly[9].wind_speed,
                direccion: data.hourly[9].wind_deg
            }
        },
        {
            temperatura: data.hourly[12].temp,
            viento: {
                velocidad: data.hourly[12].wind_speed,
                direccion: data.hourly[12].wind_deg
            }
        },
        {
            temperatura: data.hourly[15].temp,
            viento: {
                velocidad: data.hourly[15].wind_speed,
                direccion: data.hourly[15].wind_deg
            }
        },
        {
            temperatura: data.hourly[18].temp,
            viento: {
                velocidad: data.hourly[18].wind_speed,
                direccion: data.hourly[18].wind_deg
            }
        },
        {
            temperatura: data.hourly[21].temp,
            viento: {
                velocidad: data.hourly[21].wind_speed,
                direccion: data.hourly[21].wind_deg
            }
        },
        
    ]
    
    const grafica = document.querySelector("#grafica > polyline")
    grafica.setAttribute("height", "200px")
    grafica.setAttribute("points", `-40,240 -20,${100 - (Math.round(forescast24hs[0].temperatura))} 0,${100 - (Math.round(forescast24hs[0].temperatura))} 10,${100 - (Math.round(forescast24hs[0].temperatura))} 100,${100 - (Math.round(forescast24hs[1].temperatura))} 200,${100 - (Math.round(forescast24hs[2].temperatura))} 300,${100 - (Math.round(forescast24hs[3].temperatura))} 400,${100 - (Math.round(forescast24hs[4].temperatura))} 500,${100 - (Math.round(forescast24hs[5].temperatura))} 600,${100 - (Math.round(forescast24hs[6].temperatura))} 690,${100 - (Math.round(forescast24hs[7].temperatura))} 700,${100 - (Math.round(forescast24hs[7].temperatura))} 720,${100 - (Math.round(forescast24hs[7].temperatura))} 740,240 0,240`)
    
    const svg = document.querySelector("#grafica")
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

    //El pronostico de 7 dias es apartir del dia actual y los proximos 7 dias  
    const forecast7DaysWeatherData = [
        {
            tempMax0: Math.round(data.daily[0].temp.max),
            tempMin0: Math.round(data.daily[0].temp.min)
        },
        {
            tempMax1: Math.round(data.daily[1].temp.max),
            tempMin1: Math.round(data.daily[1].temp.min)
        },
        {
            tempMax2: Math.round(data.daily[2].temp.max),
            tempMin2: Math.round(data.daily[2].temp.min)
        },
        {
            tempMax3: Math.round(data.daily[3].temp.max),
            tempMin3: Math.round(data.daily[3].temp.min)
        },
        {
            tempMax4: Math.round(data.daily[4].temp.max),
            tempMin4: Math.round(data.daily[4].temp.min)
        },
        {
            tempMax5: Math.round(data.daily[5].temp.max),
            tempMin5: Math.round(data.daily[5].temp.min)
        },
        {
            tempMax6: Math.round(data.daily[6].temp.max),
            tempMin6: Math.round(data.daily[6].temp.min)
        },
        {
            tempMax7: Math.round(data.daily[7].temp.max),
            tempMin7: Math.round(data.daily[7].temp.min)
        }
    ]

    forecast7DaysWeatherData.forEach(element => {
        Object.keys(element).forEach(key => {
            document.getElementById(key).textContent = element[key] + '°'
        });
    });
    
    var noche = nocheDia()
    for (let index = 0; index < 8; index++) {
        var icono = data.daily[index].weather[0].icon
        console.log(noche)
        if(noche == "true"){
            icono = icono[0] + icono[1] + "n"
        }
        else{
            icono = icono[0] + icono[1] + "d"
        }
        const url = `http://openweathermap.org/img/wn/${icono}.png`
        document.getElementById("icono" + index).src = url
        document.getElementById("dia" + index).textContent = determinaDia(index)
    }

    console.log(forecast7DaysWeatherData)
    console.log(forescast24hs)

}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData)
}

onLoad()