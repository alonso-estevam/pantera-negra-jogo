/*
1 - gerar um número aleatório;
2 - armazenar o palpite do usuário;
3 - conferir se o palpite está certo;
4 - se não estiver, informar se está alto ou baixo;
5 - permitir até 4 tentativas;
*/

function conferirPalpite () {
    var numeroAleatorio = Math.floor(Math.random() * 40) + 1;
    var palpite = Number(prompt("Digite seu palpite"));
    
    for (var i = 0; i < 4; i++) {
        if (palpite === numeroAleatorio) {
            alert("Excelente! Você acertou o número!");
            document.write(`<p>Ir para a próxima fase</p>`)
        } else if (palpite > numeroAleatorio) {
            alert("Que pena! Seu palpite foi acima do número");
            var palpite = Number(prompt("Digite um novo palpite"));
        } else if (palpite < numeroAleatorio) {
            alert("Que pena! Seu palpite foi abaixo do número");
            var palpite = Number(prompt("Digite um novo palpite"));
        }
    }
    
}
