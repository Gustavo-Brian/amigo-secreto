const inputNomeInserido = document.getElementById('amigo');
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');
let nomes = [];

function adicionarAmigo() {
    if(ulResultado != '') {
        ulResultado.innerHTML = '';
    }

    if(inputNomeInserido.value == '') {
        alert('Insira algo');
    }else if(nomes.includes(inputNomeInserido.value)) {
        alert('Nome já inserido');
    }else {
        nomes.push(inputNomeInserido.value);
    }

    atualizarLista();

    inputNomeInserido.value = '';
}

function atualizarLista() {
    ulListaAmigos.innerHTML = '';

    for(let i = 0; i < nomes.length; i++) {
        let li = document.createElement('li');

        li.innerHTML = nomes[i];

        ulListaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor((Math.random() * nomes.length));

    if(nomes.length == 0) {
       alert('Lista vazia');
    }else {
        let li = document.createElement('li');

        ulListaAmigos.innerHTML = '';

        li.innerHTML = `Nome sorteado: ${nomes[indiceAleatorio]}`;

        ulResultado.appendChild(li);
    }

    nomes = [];
}