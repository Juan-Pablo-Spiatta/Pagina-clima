const listaPaises = new Map();
listaPaises.set('AR', 'Argentina');
listaPaises.set('ES', 'España');

function definePais(codigo){
    for(let [key,value] of listaPaises){
        if(key == codigo){
            return value;
        }
    }
}