let date = new Date();
var dia = date.getDay();
var mes = date.getMonth();
var numero = date.getDate();


const dias = new Map();
dias.set(1 ,"Lunes");
dias.set(2 ,"Martes");
dias.set(3 ,"Miercoles");
dias.set(4 ,"Jueves");
dias.set(5 ,"Viernes");
dias.set(6 ,"Sabado");
dias.set(7 ,"Domingo");

const meses = new Map();
meses.set(0, "Enero");
meses.set(1, "Febrero");
meses.set(2, "Marzo");
meses.set(3, "Abril");
meses.set(4, "Mayo");
meses.set(5, "Junio");
meses.set(6, "Julio");
meses.set(7, "Agosto");
meses.set(8, "Septiembre");
meses.set(9, "Octubre");
meses.set(10,"Noviembre");
meses.set(11,"Diciembre");

function determinaDia(d){
    if(d == 0){
        return dias.get(dia)
    }else{
        if(dia + d <= 7){
            return dias.get(dia + d)
        }else{
            return dias.get(d - 1)
        }
    }
}
function determina(d, m, n){
    resultado = ''
    for(let key of dias.keys()){
        if(key == d){
            resultado += dias.get(key)
            break
        }
    }
    resultado += ' ' + n + ' ' 
    for(let key of meses.keys()){
        if(key == m){
            resultado += meses.get(key)
            break
        }
    }
    return resultado
}

var resultado = determina(dia, mes, numero);
document.getElementById("fecha").textContent = resultado

