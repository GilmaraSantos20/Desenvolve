
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTecla = document.querySelectorAll('.tecla'); // cria um array que guarda as teclas  

for(let i = 0; listaDeTecla.length > i; i++ ) {

    const tecla = listaDeTecla[i]; //essa const vai percorrer a listaDeTecla na posicao do contador i 

    const instrumento = tecla.classList[1]; // instrumento é oq será tocado, ele recebe tecla e o classList acessa a lista de classes da tecla

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () { //nao podemos chamar diretamente a funcao tocaSom pq ela é ativada assim que clamamos, então criamos uma funcao anonima 
        tocaSom(idAudio);
    }

    //Para fazer com que funcione os efeitos de mudança de cor ao pressionar a tecla
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    console.log(i);
}