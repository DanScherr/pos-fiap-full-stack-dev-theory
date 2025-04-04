function primeiroElemento(arr) {
    return arr[0];
}
var numeros = primeiroElemento([1, 2, 3]);
var palavras = primeiroElemento(['ola', 'mundo']);
console.log(numeros);
console.log(palavras);
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    return Pessoa;
}());
var CaixaNome = /** @class */ (function () {
    function CaixaNome(conteudo) {
        this.conteudo = conteudo;
    }
    return CaixaNome;
}());
var pessoa = new Pessoa("Joao");
var caixa = new CaixaNome(pessoa);
console.log(caixa.conteudo.nome);
