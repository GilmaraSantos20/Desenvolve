async function buscarEndereco (cep) {

    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

   try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        
        var consultaCepConvertidada = await consultaCep.json();
        
        if (consultaCepConvertidada.erro) {
            throw Error('CEP não exixte');
        }

        var cidade = document.getElementById('cidade');
        var logradouro  = document.getElementById('endereco');
        var estado  = document.getElementById('estado');

        cidade.value = consultaCepConvertidada.localidade;
        logradouro.value = consultaCepConvertidada.logradouro;
        estado.value = consultaCepConvertidada.uf;
    
        console.log(consultaCepConvertidada); 

    } catch (erro) {
        mensagemErro.innerHTML = "<p>CEP inválido, tente novamente. </p>";
        console.log(erro);
    }

}

var cep = document.getElementById('cep'); 
cep.addEventListener("focusout", () => buscarEndereco(cep.value));
