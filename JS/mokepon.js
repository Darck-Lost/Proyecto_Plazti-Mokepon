let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){
    let seleccionarAtaque = document.getElementById('seleccionar-ataque');
    let displayMensajeJugador = document.getElementById('mensaje-Jugador');
    let displayMensajeEnemigo = document.getElementById('mensaje-Enemigo');
    let displayReinicio = document.getElementById('reinicio');
    seleccionarAtaque.style.display = 'none';
    displayMensajeJugador.style.display = 'none';
    displayMensajeEnemigo.style,display = 'none';
    displayReinicio.style.display = 'none';

    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click',reiniciarJuego);
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');
    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge';
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo';
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya';
    }else{
        alert('selecciona Alguna Mascota');
    }

    seleccionarMascotaEnemigo()
    desabilidarBotones(inputHipodoge,inputCapipepo,inputRatigueya)

    let displayataque = document.getElementById('seleccionar-mascota');
    displayataque.style.display = 'none';
    let seleccionarAtaque = document.getElementById('seleccionar-ataque');
    seleccionarAtaque.style.display = 'block';
    let displayMensajeJugador = document.getElementById('mensaje-Jugador');
    displayMensajeJugador.style.display = 'flex';
    let displayMensajeEnemigo = document.getElementById('mensaje-Enemigo');
    displayMensajeEnemigo.style.display = 'flex';
}

function desabilidarBotones(a,b,c){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.disabled = true;
    a.disabled ,b.disabled ,c.disabled = true;
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    }else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
    
}

function ataqueAleatorioEnemigo (){
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO';
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA';
    }else if (ataqueAleatorio == 3){
        ataqueEnemigo = 'TIERRA';
    }

    combate()
}

function combate (){
    let spanVidaJugador = document.getElementById('vida-jugador');
    let spanVidaEnemigo = document.getElementById('vida-enemigo');
 
    if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'AGUA' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'TIERRA' || ataqueJugador == 'TIERRA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje(ataqueJugador,ataqueEnemigo)
        vidasJugador--;
        spanVidaJugador.innerHTML = vidasJugador;
    }else if ( ataqueJugador == ataqueEnemigo){
        crearMensaje(ataqueJugador,ataqueEnemigo)
    }else{
        crearMensaje(ataqueJugador,ataqueEnemigo)
        vidasEnemigo--;
        spanVidaEnemigo.innerHTML = vidasEnemigo;
    }
    revisarVidas(vidasEnemigo,vidasJugador)
}

function revisarVidas(a,b){
    if(a == 0){
        alert('Ganaste');
        crearMensajeFinal('Ganas','Pierdes');
        let displayReinicio = document.getElementById('reinicio');
        displayReinicio.style.display = 'block';
    }else if (b == 0){
        alert('Perdiste');
        crearMensajeFinal('Pierdes','Ganas');
        let displayReinicio = document.getElementById('reinicio');
        displayReinicio.style.display = 'block';
    }
}

function crearMensaje(a,b){
    let sectionMensajesJugador = document.getElementById('mensaje-Jugador');
    let parrafoJugador = document.createElement('p');
    if (a=='FUEGO'){
        parrafoJugador.innerHTML = '🔥';
    }else if(a=='AGUA'){
        parrafoJugador.innerHTML = '💧';
    }else if(a=='TIERRA'){
        parrafoJugador.innerHTML = '🌱';
    }else if(a=='Ganas'){
        parrafoJugador.innerHTML = '🙂';
    }else if(a=='Pierdes'){
        parrafoJugador.innerHTML = '🥺';
    }
    sectionMensajesJugador.appendChild(parrafoJugador);
    let sectionMensajesEnemigo = document.getElementById('mensaje-Enemigo');
    let parrafoEnemigo = document.createElement('p');
    if (b=='FUEGO'){
        parrafoEnemigo.innerHTML = '🔥';
    }else if(b=='AGUA'){
        parrafoEnemigo.innerHTML = '💧';
    }else if(b=='TIERRA'){
        parrafoEnemigo.innerHTML = '🌱';
    }else if(b=='Ganas'){
        parrafoEnemigo.innerHTML = '🙂';
    }else if(b=='Pierdes'){
        parrafoEnemigo.innerHTML = '🥺';
    }
    sectionMensajesEnemigo.appendChild(parrafoEnemigo);
}

function crearMensajeFinal(a,b){
    crearMensaje(a,b)

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true;
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true;
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO';
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA';
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA';
    ataqueAleatorioEnemigo()
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)
















