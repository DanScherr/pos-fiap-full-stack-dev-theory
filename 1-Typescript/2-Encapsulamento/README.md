# PÓS FIAP FULL STACK DEVELOPER

[Home](../../README.md)/[Typescript](../README.md)

## [Encapsulamento](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html#handbook-content)
* Preferível usar módulos.

### [Modulos](https://www.typescriptlang.org/docs/handbook/modules/introduction.html)
* Modules also have a dependency on a module loader (such as CommonJs/Require.js) or a runtime which supports ES Modules. Modules provide for better code reuse, stronger isolation and better tooling support for bundling.
* Usa-se *export* na função em um determinado arquivo, para exportar ela possa ser importada por outro.
* Tentar deixá-los o mais básico, para poder ser reutilizado em diferentes contextos

### [Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html#handbook-content)
* Namespaces are a TypeScript-specific way to organize code.
* Namespaces are simply named JavaScript objects in the global namespace. This makes namespaces a very simple construct to use. Unlike modules, they can span multiple files, and can be concatenated using outFile. 
* Namespaces can be a good way to structure your code in a Web Application, with all dependencies included as ```<script> tags in your HTML page.```
* Just like all global namespace pollution, it can be hard to identify component dependencies, especially in a large application.
* Funcionam como containers dentro do código, agrupando variáveis, funções, classes, interfaces, etc., que estão conectadas de forma lógica sob um nome identificador, chamado de namespace.
* Para chamar as funções, classes, etc., dentro de um namespace, é necessário pré-fixá-lo com o nome do namespace.
* Ajuda para não ocorrer conflitos de nomes e organizar o projeto.

### Quando usar
* Namespaces: quando você  tem muitas  classes  ou  funções  relacionadas  que 
deseja agrupar sob um nome comum e elas estão no mesmo contexto geral.
* Módulos: quando  você  deseja  manter  seu  código  separado  em  arquivos 
distintos, facilitando a manutenção, o teste e o gerenciamento de dependências.

### Diferenças chave
* Namespaces: são  como seções  em  uma  gaveta,  organizando  diferentes 
classes/funções sob um nome comum.
* Módulos: são como livros individuais em uma biblioteca. Cada um é separado 
e  contém  informações  específicas.  Eles  podem  compartilhar  informações  usando importação/exportação.