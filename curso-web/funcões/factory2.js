function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notbook", 2199.49))
console.log(criarProduto("iPad", 1199.49))