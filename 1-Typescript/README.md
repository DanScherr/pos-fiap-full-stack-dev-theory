# PÓS FIAP FULL STACK DEVELOPER

[Home](../README.md)/

## SUMÁRIO
- [Basics](#basics)
- [POO](./1-POO/README.md)
- [Encapsulamento](./2-Encapsulamento/README.md)
- [Inversão de Dependência](./3-Inversao-de-dependencia/README.md)

## Typescript
### [Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
* Tipagem estática
    * Static types systems describe the shapes and behaviors of what our values will be when we run our programs. A type-checker like TypeScript uses that information and tells us when things might be going off the rails.
* Necessário transpilar para .js para rodar nos navegadores
    * Compilador: tsc (Typescript Compiler)
    * Configuração do compilador: tsconfig.json
    * Impede a transpilação se houver erros
*  Declarações de variáveis:
    * *Explicito:* Qualquer tentativa de atribuir um valor de um tipo diferente resultará em um erro
    * *Implicito (Erased Types):* sem especificar explicitamente um tipo. O TS irá inferir automaticamente o tipo com base no valor atribuido.
