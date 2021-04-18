
var inputJugador = document.getElementById('jugador-nuevo')
var cuerpoTabla = document.getElementById('equipos-tabla')


let tabla = [

];

var i,j,x,pval,tablaLlena;

function agregarJugador(){
    var newPlayer = inputJugador.value
    var nuevoJugador = newPlayer
    tabla.push(nuevoJugador)
    tablaJugadores();
    console.log(tabla)
}
function tablaJugadores (){
    tablaLlena = "";
    for (let i=0; i<tabla.length; i++){
        tablaLlena += "<tr><td>"+tabla[i];
    }

    cuerpoTabla.innerHTML = tablaLlena;
}
function dividirEquipos (tablaLlena) {

    for (i=tabla.length-1; i>0; i--){
        j = Math.floor(Math.random()*(i+1));
        x = tabla[i]
        tabla[i] = tabla[j]
        tabla[j] = x
    }
   
    pval="";
    for (i=0, j=tabla.length-1; i<tabla.length/2; i++, j--){
        pval += "<tr>"
        pval += "<td>"+tabla[i]+"</td>"
        pval += "<td>"+tabla[j]+"</td>"
        pval += "</tr>"
    }

    document.getElementById('equipos-divididos').innerHTML = pval;

}
