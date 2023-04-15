function dobra(vetor){
    let resultados = [];
    for (let i = 0; i < vetor.length ; i++){
        resultados.push(vetor[i] * 2);      
    }

console.log(resultados);
return resultados;

}

dobra([2, 5]);

function dobra(vetor){
    return vetor.map((item) => item * 2);
    }

//Tenta entender esse ultimo