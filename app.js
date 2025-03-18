//Declaração dos recursos utilizados.
const inputNomeInserido = document.getElementById('amigo');
const ulListaAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');
let nomes = [];

//Função para adicionar um nome a lista nomes.
function adicionarAmigo() {
    if(ulResultado.innerHTML !== '') {
        ulResultado.innerHTML = '';
    }

    if(inputNomeInserido.value === '') {
        alert('Insira algo');
    }else if(nomes.includes(inputNomeInserido.value)) {
        alert('Nome já inserido');
    }else {
        nomes.push(inputNomeInserido.value);
    }

    atualizarLista();

    inputNomeInserido.value = '';
}

//Função para atualizar a <ul> com elementos <li>, cada um representando um item do array 'nomes'.
function atualizarLista() {
    ulListaAmigos.innerHTML = '';

    for(let i = 0; i < nomes.length; i++) {
        const li = document.createElement('li');

        li.innerHTML = nomes[i];

        ulListaAmigos.appendChild(li);
    }
}

//Função para sortear um nome do array nomes.
function sortearAmigo() {
    ulResultado.innerHTML = '';

    const indiceAleatorio = Math.floor((Math.random() * nomes.length));
    const nomeSorteado = nomes[indiceAleatorio];

    if(nomes.length === 0) {
       alert('Lista vazia');
    }else {
        const li = document.createElement('li');

        li.innerHTML = `Nome sorteado: ${nomeSorteado}`;

        ulResultado.appendChild(li);

        nomes.splice(indiceAleatorio, 1);

        atualizarLista();
    }
}