# PÓS FIAP FULL STACK DEVELOPER

## Inversão de dependência
### Inversão de controle
* É  uma  maneira  de  organizar  programas  de computador nos quais não é a pessoa desenvolvedora quem determina diretamente a   ordem   e   o   modo   como   os   métodos   são   chamados.   Em   vez   disso,   essa 
responsabilidade  é  passada  para  uma  parte  específica  do  software,  geralmente chamada de "container", ou outro componente, que gerencia quando e como certas partes  do  programa  são  executadas.  Isso  é  diferente  da  programação  tradicional, onde o(a) programador(a) tem controle total sobre o fluxo do programa.
* Imagine   um   programa   de   computador   como   uma   série   de   tarefas. 
    * Normalmente,  seu  código  controla  a  ordem  e  o  modo  como  essas  tarefas  são executadas. 
    * A Inversão de Controle muda isso: ao invés de seu código gerenciar tudo, um  sistema  externo  toma  as  decisões  de  controle.  
    * Isso  é  como  ter  um  maestro regendo uma  orquestra,  onde  cada instrumentista (parte  do  seu  código)  só  toca quando o maestro indica

### Exemplos
* Programação orientada a eventos
    * O programa responde a eventos externos (como cliques de botão) em vez de seguir um fluxo pré-definido
* Injeção de dependências
    * Os componentes do programa recebem suas dependências de um sistema externo, em vez de criá-las por conta própria.
* Programa funcional
    * Enfatiza o uso de funções onde o controle de execução é frequentemente gerenciado pelo próprio framework de programação.

