function getNumeroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
};

let opcao = -1;

do {
    opcao = getNumeroAleatorioEntre(-1, 10)
    console.log("A opção escolhida foi: ", + opcao)
} while (opcao != -1)

console.log("Até a próxima");