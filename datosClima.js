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
            },
            probLluvia: data.hourly[0].pop
        },
        {
            temperatura: data.hourly[3].temp,
            viento: {
                velocidad: data.hourly[3].wind_speed,
                direccion: data.hourly[3].wind_deg
            },
            probLluvia: data.hourly[3].pop
        },
        {
            temperatura: data.hourly[6].temp,
            viento: {
                velocidad: data.hourly[6].wind_speed,
                direccion: data.hourly[6].wind_deg
            },
            probLluvia: data.hourly[6].pop
        },
        {
            temperatura: data.hourly[9].temp,
            viento: {
                velocidad: data.hourly[9].wind_speed,
                direccion: data.hourly[9].wind_deg
            },
            probLluvia: data.hourly[9].pop
        },
        {
            temperatura: data.hourly[12].temp,
            viento: {
                velocidad: data.hourly[12].wind_speed,
                direccion: data.hourly[12].wind_deg
            },
            probLluvia: data.hourly[12].pop
        },
        {
            temperatura: data.hourly[15].temp,
            viento: {
                velocidad: data.hourly[15].wind_speed,
                direccion: data.hourly[15].wind_deg
            },
            probLluvia: data.hourly[15].pop
        },
        {
            temperatura: data.hourly[18].temp,
            viento: {
                velocidad: data.hourly[18].wind_speed,
                direccion: data.hourly[18].wind_deg
            },
            probLluvia: data.hourly[18].pop
        },
        {
            temperatura: data.hourly[21].temp,
            viento: {
                velocidad: data.hourly[21].wind_speed,
                direccion: data.hourly[21].wind_deg
            },
            probLluvia: data.hourly[21].pop
        },
        
    ]
    creaPrecipitacionesSVG(forescast24hs)
    creaTemperaturaSVG(forescast24hs)
    creaVientoSVG(forescast24hs)

    //El pronostico de 7 dias es apartir del dia actual y los proximos 7 dias  
    const forecast7DaysWeatherData = [
        {
            tempMax0: Math.round(data.daily[0].temp.max) + "° Max",
            tempMin0: Math.round(data.daily[0].temp.min) + "° Min"
        },
        {
            tempMax1: Math.round(data.daily[1].temp.max) + "° Max",
            tempMin1: Math.round(data.daily[1].temp.min) + "° Min"
        },
        {
            tempMax2: Math.round(data.daily[2].temp.max) + "° Max",
            tempMin2: Math.round(data.daily[2].temp.min) + "° Min"
        },
        {
            tempMax3: Math.round(data.daily[3].temp.max) + "° Max",
            tempMin3: Math.round(data.daily[3].temp.min) + "° Min"
        },
        {
            tempMax4: Math.round(data.daily[4].temp.max) + "° Max",
            tempMin4: Math.round(data.daily[4].temp.min) + "° Min"
        },
        {
            tempMax5: Math.round(data.daily[5].temp.max) + "° Max",
            tempMin5: Math.round(data.daily[5].temp.min) + "° Min"
        },
        {
            tempMax6: Math.round(data.daily[6].temp.max) + "° Max",
            tempMin6: Math.round(data.daily[6].temp.min) + "° Min"
        },
        {
            tempMax7: Math.round(data.daily[7].temp.max) + "° Max" ,
            tempMin7: Math.round(data.daily[7].temp.min) + "° Min" 
        }
    ]

    forecast7DaysWeatherData.forEach(element => {
        Object.keys(element).forEach(key => {
            document.getElementById(key).textContent = element[key]
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
