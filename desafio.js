/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/
// Função principal

let ranking = {};

while (true) {
    let pais = prompt("Nome do país ou sair:").trim();
    if (pais.toLowerCase() === "sair") break;

    let ouro = +prompt("Medalhas de OURO:");
    let prata = +prompt("Medalhas de PRATA:");
    let bronze = +prompt("Medalhas de BRONZE:");

    if ([ouro, prata, bronze].some(isNaN)) {
        alert("Digite números inteiros.");
        continue;
    }

    ranking[pais] = (ranking[pais] || 0) + ouro + prata + bronze;
}

let resultado = "#Ranking do total de  medalhas:\n" + 
    Object.entries(ranking)
        .sort((a, b) => b[1] - a[1])
        .map(([pais, total]) => `#${pais}: ${total} medalhas`)
        .join("\n");

alert(resultado);
