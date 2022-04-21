
// FUNÇÃO PARA A FASE I
function confereResposta1(respostaCerta) {
    var respostaJogador = prompt("Digite a resposta (A, B, C ou D)");
    if (respostaJogador.toUpperCase() === respostaCerta) {
        alert("Parabéns! Você acertou na primeira tentativa!");

        window.location.replace('tchalla-fase2.html');
    } else {
        alert("Que pena, você errou. Segunda tentativa:");
        var respostaJogador = prompt("Digite a resposta (A, B, C ou D)");

        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Você acertou na segunda tentativa!");
            window.location.replace('tchalla-fase2.html');

        } else {
            alert("Que pena, você errou. Última tentativa:");
            var respostaJogador = prompt("Digite a resposta (A, B, C ou D)");
            if (respostaJogador.toUpperCase() === respostaCerta) {
                alert("Ufa! Você acertou na terceira tentativa!");
                window.location.replace('tchalla-fase2.html');

            } else {
                alert("Que pena, você errou pela terceira vez. GAME OVER");
                window.location.replace('../game-over.html');
            }
        }
    }
}

// FUNÇÃO PARA A FASE II

function confereResposta2(respostaCerta) {
    var respostaJogador = prompt("Digite a resposta");
    if (respostaJogador.toUpperCase() === respostaCerta) {
        alert("Parabéns! Você acertou na primeira tentativa!");
        window.location.replace('tchalla-fase3.html');
    } else {
        alert("Que pena, você errou. Segunda tentativa:");
        var respostaJogador = prompt("Digite a resposta");
        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Você acertou na segunda tentativa!");
            window.location.replace('tchalla-fase3.html');
        } else {
            alert("Que pena, você errou. Última tentativa:");
            var respostaJogador = prompt("Digite a resposta");
            if (respostaJogador.toUpperCase() === respostaCerta) {
                alert("Ufa! Você acertou na terceira tentativa!");
                window.location.replace('tchalla-fase3.html');
            } else {
                alert("Que pena, você errou pela terceira vez. GAME OVER");
                window.location.replace('../game-over.html');
            }
        }
    }
}

// FUNÇÃO PARA A FASE III
function confereResposta3() {
    var respostaJogador = prompt("Digite a resposta");
    var respostaCerta = "B";
    if (respostaJogador.toUpperCase() === respostaCerta) {
        alert("Parabéns! Você foi estrategista ao tentar evitar uma luta desnecessária e demonstrou habilidades de negociação, fundamentais para um líder.");
        window.location.replace('tchalla-fase4.html');
    } else if (respostaJogador.toUpperCase() === "A") {
        alert("A princípio pode parecer uma boa ideia, mas essa escolha provocou um tumulto no local e você não conseguiu pegar o artefato! Volte à fase II e ouça seu pai novamente");
        window.location.replace('tchalla-fase2.html');
    } else if (respostaJogador.toUpperCase() === "C") {
        alert("Você escolheu lutar com Klaue! Corajoso, porém, o vilão conseguiu fugir. Você e sua equipe ainda fazem uma grande perseguição, mas Klaue escapa. Pelo menos vocês resgataram o artefato.");
        window.location.replace('tchalla-fase4.html');
    } else if (respostaJogador.toUpperCase() === "D") {
        alert("Que escolha lamentável! Não é o que se espera de um Rei como T'Challa. GAME OVER!");
        window.location.replace('../game-over.html');
    }
}

// FUNÇÃO PARA A FASE IV
function confereResposta4(respostaCerta) {
    var respostaJogador = prompt("Digite a resposta");
    if (respostaJogador.toUpperCase() === respostaCerta) {
        alert("Parabéns! Você acertou na primeira tentativa!");

        window.location.replace('tchalla-final.html');
    } else {
        alert("Que pena, você errou. Última tentativa:");
        var respostaJogador = prompt("Digite a resposta");

        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Foi por pouco, mas você acertou na segunda tentativa!");
            window.location.replace('../finalizou.html');

        } else {
            alert("Que pena, era sua última chance. GAME OVER");
            window.location.replace('../game-over.html');
        }
    }
}