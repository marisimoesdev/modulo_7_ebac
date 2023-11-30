const form = document.getElementById('formulario'); //constante para o formulario
const inputNumeroMenor = document.getElementById('numeroMenor'); //constante para o número menor
const inputNumeroMaior = document.getElementById('numeroMaior'); //constante para o número maior   
const mensagem_erro = `O primeiro número precisa ser o menor ou igual`; //constante para a mensage de erro
const erro = document.querySelector('.erro'); //selecionado o elemento pará grafo do HTML para a mensagem de erro
erro.innerHTML = mensagem_erro; //alocando o parágrafo do HTML na constante que está a mensagem de erro
let validacao = false; //variável booleana para as condições

function validacaoNumero(numMenor, numMaior) { //função criada para comparar o números
    return parseFloat(numMaior) >= parseFloat(numMenor); //retornado o valor true ou false
    /*convertendo os valores de string para float, pois caso seja digitado 50 no 1º input e 4000 no 2º input
    ele interpretaria somente o 1º digito e como 5 é maior que 4 ele mostraria a mensagem de erro, mesmo que 50
    seja menor que 4000.*/
}

//ESSE EVENTO OCORRE DEPOIS DA PESSOA APERTAR O BOTÃO
form.addEventListener('submit', function(e) { //evento do formulário para que a pág não recarregue
    e.preventDefault(); /*a página não irá mais recarregar*/
    
    let num1 = parseFloat(document.getElementById('numeroMenor').value); /*alocando o número do campo 1 em uma variável e convertendo o mesmo para tipo float, para que  divisão seja possível*/
    let num2 = parseFloat(document.getElementById('numeroMaior').value); /*alocando o número do campo 2 em uma variável e convertendo o mesmo para tipo float, para que  divisão seja possível*/   
    let conta = (num1 + num2) / 2; //conta da média
    
    const contaMedia = `Parabéns: A média dos números ${inputNumeroMenor.value} e o ${inputNumeroMaior.value} é: ${conta}`; //constante da mensagem de sucesso
    const mensagemConta = document.querySelector('.certa')//selecionado o elemento parágrafo do HTML para a mensagem de sucesso
    mensagemConta.innerHTML = contaMedia; //alocando o parágrafo do HTML na constante que está a mensagem de sucesso
    
    validacao = validacaoNumero(inputNumeroMenor.value, inputNumeroMaior.value) //definindo que o valor da variável “validacao” será igual ao resultado do retorno da função “validaNumero”    

    if(validacao){ //caso dê true
        mensagemConta.style.display = 'block' //mensagem de sucesso irá aparecer, já que as mesma possuem display “none”, para que assim só apareça quando for necessário

        numeroMenor.value = ''; //limpano o input após o botão ter sido clicado
        numeroMaior.value = ''; //limpano o input após o botão ter sido clicado
    } else { //caso dê false
        
        inputNumeroMenor.style.border = '1px solid red' //colocando borda no input do número menor
        inputNumeroMaior.style.border = '1px solid red' //colocando borda no input do número maior
        erro.style.display = 'block' //mensagem de sucesso irá aparecer, já que as mesma possuem display “none”, para que assim só apareça quando for necessário
        mensagemConta.style.display = 'none' //sumindo com a mensagem de sucesso
    }
})

//ESSE EVENTO OCORRE ENQUANTO O FORMULÁRIO É PREENCHIDO
form.addEventListener('input', function(e) { //evento que acontecerá nos inputs do formulário, quando o valor dos inputs forem alterados
    let num1 = parseFloat(document.getElementById('numeroMenor').value); /*alocando o número do campo 1 em uma variável e convertendo o mesmo para tipo float, para que  divisão seja possível*/
    let num2 = parseFloat(document.getElementById('numeroMaior').value); /*alocando o número do campo 2 em uma variável e convertendo o mesmo para tipo float, para que  divisão seja possível*/   
    let conta = (num1 + num2) / 2; //conta da média
    
    const contaMedia = `Parabéns: A média dos números ${inputNumeroMenor.value} e o ${inputNumeroMaior.value} é: ${conta}`; //constante da mensagem de sucesso
    const mensagemConta = document.querySelector('.certa')//selecionado o elemento parágrafo do HTML para a mensagem de sucesso
    mensagemConta.innerHTML = contaMedia; //alocando o parágrafo do HTML na constante que está a mensagem de sucesso

    validacao = validacaoNumero(inputNumeroMenor.value, inputNumeroMaior.value) //definindo que o valor da variável “validacao” será igual ao resultado do retorno da função “validaNumero”    

    if(inputNumeroMaior.value == '') { //caso o inputNumeroMaior esteja com o valor vazio, coloquei essa opção pois quando o campo do inputNumeroMenor erá preenchido a mensagem de erro aparecia automaticamente
        erro.style.display = 'none'
        inputNumeroMaior.style.border = ''
        inputNumeroMenor.style.border = ''
        mensagemConta.style.display = 'none' //sumindo com a mensagem de sucesso
    }
    else if(!validacao) { //caso dê false
        inputNumeroMenor.style.border = '1px solid red'
        inputNumeroMaior.style.border = '1px solid red'
        mensagemConta.style.display = 'none' //sumindo com a mensagem de sucesso
        erro.style.display = 'block'
    }
    else if (validacao) { //caso dê true, essa condição foi criada para sumir com a mensagem de erro, depois que a pessoa arrumou os valores
        erro.style.display = 'none'
        inputNumeroMaior.style.border = ''
        inputNumeroMenor.style.border = ''
    }
})