// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 

let amigos = [];
let amigo = "";
let lista = [];

function agregarAmigo() {
    amigo = document.getElementById("amigo").value;
    if (amigo !== "") {
        amigos.push(amigo);
        document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
    mostrarAmigos(amigos);
}

function mostrarAmigos(listado) {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listado.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para sortear.");
        return;
    }
    
    //Definir amigos que se van a sortear inicialmente
    let amigosSorteables = amigos; // Copiar la lista de amigos
    //Definir amigos que ya fueron sorteados
    let amigosSorteados = [];
    //Definir amigo amigoRegalador
    let amigoRegalador;
    let resultados = [];
    //Sortear amigo que se le va a amigo a regalar
    for (let i = 0; i < amigos.length; i++) {
        amigoRegalador = amigos[i];
        console.log(amigos)
        console.log(amigoRegalador);
        let amigosPosibles = amigosSorteables.filter(item => item !== amigos[i]);
        amigosPosibles = amigosPosibles.filter(item => !amigosSorteados.includes(item));
        console.log(amigosPosibles);
        let amigoSeleccionado;
        let sorteo =Math.floor((Math.random()*amigosPosibles.length));
        console.log(sorteo);
        amigoSeleccionado = amigosPosibles[sorteo];
        console.log(amigoSeleccionado);
        resultados.push([amigoRegalador, amigoSeleccionado]);
        console.log(resultados);
        amigosSorteados.push(amigoSeleccionado);
    
    }
    mostrarResultados(resultados);
    
}

function mostrarResultados(resultados) {
  const listaResultados = document.getElementById("resultado");
  listaResultados.innerHTML = "";

  for (const [amigo, amigoSeleccionado] of resultados) {
    const li = document.createElement("li");
    li.textContent = `${amigo} ha sacado a ${amigoSeleccionado}`;
    listaResultados.appendChild(li);
  }
}