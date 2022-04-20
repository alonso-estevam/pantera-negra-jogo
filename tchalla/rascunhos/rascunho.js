/*
1 - gerar um número aleatório;
2 - armazenar o palpite do usuário;
3 - conferir se o palpite está certo;
4 - se não estiver, informar se está alto ou baixo;
5 - permitir até 4 tentativas;
*/

// function conferirPalpite () {
//     var numeroAleatorio = Math.floor(Math.random() * 40) + 1;
//     var palpite = Number(prompt("Digite seu palpite"));
    
//     for (var i = 0; i < 4; i++) {
//         if (palpite === numeroAleatorio) {
//             alert("Excelente! Você acertou o número!");
//             document.write(`<p>Ir para a próxima fase</p>`)
//         } else if (palpite > numeroAleatorio) {
//             alert("Que pena! Seu palpite foi acima do número");
//             var palpite = Number(prompt("Digite um novo palpite"));
//         } else if (palpite < numeroAleatorio) {
//             alert("Que pena! Seu palpite foi abaixo do número");
//             var palpite = Number(prompt("Digite um novo palpite"));
//         }
//     }
    
// }

// OUTRA TENTATIVA DO DESAFIO ADIVINHE O NÚMERO
// Segundo o MDN, "a função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado."
//var respostaCerta = Math.round(Math.random()*10);

// Para incluir qualquer intervalo de valores diferentes de base 10:

function geraNumeroAleatorio(min,max) {
    min = Math.ceil(min); // "Arredonda" pra cima
    max = Math.floor(max); // "Arredonda" pra baixo
    return Math.floor(Math.random()*(max - min + 1) + min); // Desse modo para incluir o maior valor
}

var respostaCerta = geraNumeroAleatorio(1,40);

var respostaJogador = parseInt(prompt("Digite seu palpite: "));

if (respostaJogador === respostaCerta) {
    alert("Você acertou!");
} else if (respostaJogador > respostaCerta) {
        alert("Número muito alto. Você errou!");
        
    } else if (respostaJogador < respostaCerta) {
        alert("Número muito baixo. Você errou!")
    }



    var xp // precisa declarar fora da função para ficar no escopo global

// FUNÇÃO PARA A FASE I
function confereResposta1(respostaCerta) {
    var respostaJogador = prompt("Digite a resposta");
    if (respostaJogador.toUpperCase() === respostaCerta) {
        xp = 50;
        alert(`Parabéns! Você acertou na primeira tentativa! Ganhou ${xp} xp`);
        
        window.location.replace('tchalla-fase2.html');
    } else {
        alert("Que pena, você errou. Segunda tentativa:");
        var respostaJogador = prompt("Digite a resposta");
        
        if (respostaJogador.toUpperCase() === respostaCerta) {
            xp = 30;
            alert(`Parabéns! Você acertou na segunda tentativa! Ganhou ${xp} xp`);
            window.location.replace('tchalla-fase2.html');
        } else {
            alert("Que pena, você errou. Última tentativa:");
            var respostaJogador = prompt("Digite a resposta");
            if (respostaJogador.toUpperCase() === respostaCerta) {
                xp = 10;
                alert(`Ufa! Você acertou na terceira tentativa! Ganhou ${xp} xp`);
                window.location.replace('tchalla-fase2.html');
            } else {
                alert("Que pena, você errou pela terceira vez. GAME OVER");
                window.location.replace('../game-over.html');
            }
        } 
    }
}