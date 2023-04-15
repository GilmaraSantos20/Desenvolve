const idadeStefany = 21;
const idadeAmigos = [idadeStefany, 20, 23, 18, 7];

function calculaProximaIdade(idade) {
    idade += 1;
    console.log(idade);
}

function calcular5anos(idades) {
    for(let i = 0; i < idades.lenght; i=+1){
        idades[i] += 5;
    }
    console.log(idades);

}

console.log(idadeStefany);
calculaProximaIdade(idadeStefany);

console.log(idadeAmigos);
calcular5anos(idadeAmigos);

