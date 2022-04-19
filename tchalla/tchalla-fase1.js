function confereResposta() {
    var respostaJogador = prompt("Digite a resposta");
    var respostaCerta = "C";
    if (respostaJogador.toUpperCase() === respostaCerta) {
        alert("Parabéns! Você acertou na primeira tentativa! Ganhou 50xp");
    } else {
        alert("Que pena, você errou. Tente novamente.");
        var respostaJogador = prompt("Digite a resposta");
        if (respostaJogador.toUpperCase() === respostaCerta) {
            alert("Parabéns! Você acertou na segunda tentativa! Ganhou 30xp");
        } else {
            alert("Que pena, você errou. Tente novamente.");
            var respostaJogador = prompt("Digite a resposta");
            if (respostaJogador.toUpperCase() === respostaCerta) {
                alert("Parabéns! Você acertou na terceira tentativa! Ganhou 10xp");
            } else {
                alert("Que pena, você errou pela terceira vez. GAME OVER");
                window.location.replace('../game-over.html')
            }
        } 
    }
}
