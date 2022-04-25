let date = new Date();
var dia = date.getDay();
var mes = date.getMonth();
var hora = date.getHours();
var numero = date.getDate();


const dias = new Map();
dias.set(0 ,"Domingo");
dias.set(1 ,"Lunes");
dias.set(2 ,"Martes");
dias.set(3 ,"Miercoles");
dias.set(4 ,"Jueves");
dias.set(5 ,"Viernes");
dias.set(6 ,"Sabado");

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
        if(dia + d <=6){
            return dias.get(dia + d)
        }else{
            if(d == 7){
                return dias.get(dia)
            }else{
                return dias.get(d - 1)
            }
        }
    }
}
function determinaDiaMesNum(d, m, n){
    resultado = ''
    for(let key of dias.keys()){
        if(key == d){
            resultado += dias.get(key)
            break
        }
    }
    resultado += ' ' + n + ' de ' 
    for(let key of meses.keys()){
        if(key == m){
            resultado += meses.get(key)
            break
        }
    }
    return resultado
}

function nocheDia(){
    if(hora > 18 || hora < 6){
        return "true"
    }else{
        return "false"
    }
}
var resultado = determinaDiaMesNum(dia, mes, numero);
document.getElementById("fecha").textContent = resultado

