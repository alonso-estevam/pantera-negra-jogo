// FUNÇÃO PARA A FASE I

function confereResposta1(respostaCerta) {
    var respostaJogador = prompt('Digite a resposta (A, B, C ou D):');
    var contador = 3;

    while (contador >= 1) {
        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Resposta correta!");
            return location = "./ramonda-fase2.html";

        } else if (respostaJogador.toUpperCase() === 'A' ||  respostaJogador.toUpperCase() === 'B' || respostaJogador.toUpperCase() === 'C') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Tentativas restantes: ${contador}`);
            respostaJogador = prompt('Digite a resposta (A, B, C ou D):')
        } else {
            alert("Resposta inválida! Digite A, B, C ou D")
            respostaJogador = prompt('Digite a resposta (A, B, C ou D):');
        }
    }
    return location = "../game-over.html";
}

// FUNÇÃO PARA A FASE II
function confereResposta2(respostaCerta) {
    var respostaJogador = prompt('Digite a resposta (A, B, C ou D):');
    var contador = 3;

    while (contador >= 1) {
        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Resposta correta!");
            return location = "./ramonda-fase3.html";

        } else if (respostaJogador.toUpperCase() === 'A' ||  respostaJogador.toUpperCase() === 'C' || respostaJogador.toUpperCase() === 'D') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Tentativas restantes: ${contador}`);
            respostaJogador = prompt('Digite a resposta (A, B, C ou D):')
        } else {
            alert("Resposta inválida! Digite A, B, C ou D")
            respostaJogador = prompt('Digite a resposta (A, B, C ou D):');
        }
    }
    return location = "../game-over.html";
}

// FUNÇÃO PARA A FASE III
function confereResposta3(respostaCerta) {
    var respostaJogador = prompt('Digite a resposta (A, B, C ou D):');
    var contador = 3;

    while (contador >= 1) {
        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Resposta correta!");
            return location = "./finalizou.html";

        } else if (respostaJogador.toUpperCase() === 'B' ||  respostaJogador.toUpperCase() === 'C' || respostaJogador.toUpperCase() === 'D') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Tentativas restantes: ${contador}`);
            respostaJogador = prompt('Digite a resposta (A, B, C ou D):')
        } else {
            alert("Resposta inválida! Digite A, B, C ou D")
            respostaJogador = prompt('Digite a resposta (A, B, C ou D):');
        }
    }
    return location = "../game-over.html";
}