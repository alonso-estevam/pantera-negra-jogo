function confereResposta() {
    var respostaJogador = prompt("Digite a resposta");
    var respostaCerta = "A";
    if (respostaJogador.toUpperCase() === respostaCerta) {
        alert("Parabéns! Você acertou na primeira tentativa! Ganhou 50xp");
        window.location.replace('tchalla-fase3.html');
    } else {
        alert("Que pena, você errou. Tente novamente.");
        var respostaJogador = prompt("Digite a resposta");
        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Você acertou na segunda tentativa! Ganhou 30xp");
            window.location.replace('tchalla-fase3.html');
        } else {
            alert("Que pena, você errou. Tente novamente.");
            var respostaJogador = prompt("Digite a resposta");
            if (respostaJogador.toUpperCase() === respostaCerta) {
                alert("Parabéns! Você acertou na terceira tentativa! Ganhou 10xp");
                window.location.replace('tchalla-fase3.html');
            } else {
                alert("Que pena, você errou pela terceira vez. GAME OVER");
                window.location.replace('../game-over.html');
            }
        } 
    }
}
