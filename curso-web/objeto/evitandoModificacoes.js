// Object.preventExtension
const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "promoção"
});
console.log("Extensível:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

//Objeto.seal <- NÃO EXCLUI NEM INCLUI ATRIBUTOS
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));
pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze <- Seal + valores constantes