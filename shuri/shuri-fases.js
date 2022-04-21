// FUNÇÃO PARA A FASE I

function confereResposta1(respostaCerta) {
    var respostaJogador = prompt('Digite a resposta (A, B, C ou D):')
    var contador = 3

    while (contador > 1) {
        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Resposta correta!");
            window.location.href = "shuri-fase2.html";
            break;
        } else if (respostaJogador.toUpperCase() === 'B' ||  respostaJogador.toUpperCase() === 'C' || respostaJogador.toUpperCase() === 'D') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Você tem ${contador} tentativas!`);
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        } else {
            alert("Resposta inválida! Digite A, B, C ou D")
            respostaJogador = prompt('Digite a resposta (A, B, C ou D):');
        }
        window.location.href = "../game-over.html";
    }
}

// FUNÇÃO PARA A FASE II

function confereResposta2(respostaCerta) {
    var respostaJogador = prompt('Digite a resposta (A, B, C ou D):')
    var contador = 3

    while (contador > 1) {
        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Resposta correta!");
            window.location.href = "shuri-fase3.html";
            break;
        } else if (respostaJogador.toUpperCase() === 'A' ||  respostaJogador.toUpperCase() === 'B' || respostaJogador.toUpperCase() === 'C') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Você tem ${contador} tentativas!`);
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        } else {
            alert("Resposta inválida! Digite A, B, C ou D")
            respostaJogador = prompt('Digite a resposta (A, B, C ou D):');
        }
        window.location.href = "../game-over.html";
    }
}

// FUNÇÃO PARA A FASE III

function confereResposta3(respostaCerta) {
    var respostaJogador = prompt('Digite a resposta (A, B, C ou D):')
    var contador = 3

    while (contador > 1) {
        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Resposta correta!");
            window.location.href = "shuri-fase4.html";
            break;
        } else if (respostaJogador.toUpperCase() === 'A' ||  respostaJogador.toUpperCase() === 'B' || respostaJogador.toUpperCase() === 'D') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Você tem ${contador} tentativas!`);
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        } else {
            alert("Resposta inválida! Digite A, B, C ou D")
            respostaJogador = prompt('Digite a resposta (A, B, C ou D):');
        }
        window.location.href = "../game-over.html";
    }
}

// FUNÇÃO PARA A FASE IV

function confereResposta4(respostaCerta) {
    var respostaJogador = prompt('Digite a resposta (A, B, C ou D):')
    var contador = 3

    while (contador > 1) {
        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Resposta correta!");
            window.location.href = "../finalizou.html";
            break;
        } else if (respostaJogador.toUpperCase() === 'A' ||  respostaJogador.toUpperCase() === 'B' || respostaJogador.toUpperCase() === 'C') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Você tem ${contador} tentativas!`);
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        } else {
            alert("Resposta inválida! Digite A, B, C ou D")
            respostaJogador = prompt('Digite a resposta (A, B, C ou D):');
        }
        window.location.href = "../game-over.html";
    }
}