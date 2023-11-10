let puntosUsuario = document.getElementById('contador-usuario');
let puntosPc = document.getElementById('contador-ordenador');
let resultados = document.getElementById('resultados');
const botones = document.querySelectorAll('.boton-jugada');

let usuario = 0;
let ordenador = 0;
const opciones = ['piedra', 'papel', 'tijera'];
let mostrarganador;

botones.forEach(boton => {
    boton.addEventListener('click', function() {
        let jugador = boton.getAttribute('data-jugada')
        console.log(jugador)
        let jugOrdenador = randomPlay();
        console.log(jugOrdenador);
        mostrarganador=obtenerResultado(jugador, jugOrdenador);
        console.log(mostrarganador);
        console.log(usuario)
        console.log(ordenador)
        mostrarResultados(jugador, jugOrdenador, mostrarganador)
        actualizarPuntuacion();
    })
});

function randomPlay () {
    let jugadaOrdenador = Math.floor(Math.random() * 3);
    return opciones[jugadaOrdenador];
};

function obtenerResultado(jugador, jugadaPc){
    let jugadorgana;
    if (jugador === jugadaPc){
        return 'EMPATADO';
    }else if (jugador === 'piedra'){
        if (jugadaPc === 'papel'){
            ordenador++;
            jugadorgana ='PERDIDO';
        }else{
            usuario++;
            jugadorgana = 'GANADO';
        }
    }else if (jugador === 'papel'){
        if(jugadaPc === 'piedra'){
            usuario++
            jugadorgana ='GANADO';
        }else{
            ordenador++;
            jugadorgana ='PERDIDO';
        }
    }else if (jugador === 'tijera'){
        if (jugadaPc === 'piedra'){
            ordenador++;
            jugadorgana ='PERDIDO';
        }else{
            usuario++
            jugadorgana ='GANADO';
        }
    }
    return jugadorgana;
};

function actualizarPuntuacion() {
    puntosUsuario.textContent = `Puntos Usuario: ${usuario}`;
    puntosPc.textContent = `Puntos de la máquina: ${ordenador}`;
};

function mostrarResultados(p1, p2, p3){
    resultados.innerHTML = `<div class="jugadas"><p>Jugada Usuario: ${p1} </p> <p> Jugada Máquina: ${p2}</p></div><p class="ganador"> Has ${p3}</p>`;
}