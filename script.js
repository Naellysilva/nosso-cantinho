// CONTADOR DE NAMORO

function atualizarContador() {

    const inicio = Date.UTC(2026, 8, 8);

    const hoje = new Date();

    const hojeUTC = Date.UTC(
        hoje.getFullYear(),
        hoje.getMonth(),
        hoje.getDate()
    );

    const diferenca = hojeUTC - inicio;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    document.getElementById("contador").textContent =
        dias + " dias ♡";
}

atualizarContador();


// ABRIR E FECHAR A CARTINHA

const botaoCarta = document.getElementById("abrirCarta");

const conteudoCarta = document.getElementById("conteudoCarta");

botaoCarta.addEventListener("click", function() {

    conteudoCarta.classList.toggle("escondida");

    if (conteudoCarta.classList.contains("escondida")) {

        botaoCarta.textContent = "Abrir minha cartinha 💌";

    } else {

        botaoCarta.textContent = "Fechar cartinha ♡";

    }

});