# PÓS FIAP FULL STACK DEVELOPER

[Home](./../../README.md)/[DDD](./../README.md)/

# Sumario

* [Domanei story telling](#domain-story-telling)
* [Linguagem pictográfica](#linguagem-pictográfica)
    * [Atores](#-atores)
    * [Objetos de trabalho](#-objetos-de-trabalho-objetos-de-trabalho)
    * [Atividades](#-atividades)
    * [Números sequenciais](#-números-sequenciais)
    * [Grupos](#-grupos)
    * [Cores](#-cores)

## Domain story telling
O que é?

O Domain-Driven  Design utiliza  histórias  para  entendermos  melhor  sobre  o negócio,  a  jornada  do  cliente, entre  outros.  Por  isso,  vamos  entrar  nos  conceitos Domain Storytelling, uma ferramenta que nos ajuda muito nesta parte do DDD.

Todo  Domínio  tem  sua jornada,  e  nada  melhor  que  contar  a  história  do  que acontece  neste  Domínio  para entender  o  que  há  de  ser  feito.  Narrativa  de  Domínio (Domain  Storytelling)  é exatamente  isso,  são  métodos  e  técnicas  que  utilizaremos para  entender melhor nossos   Domínios   e   Subdomínios,   trazendo   pessoas com   vários   níveis   de conhecimento para compartilhar suas visões em um único documento, nos dando uma visão clara do que é feito e quais os limites da nossa história.

## Linguagem Pictográfica
De  forma  a  criarmos  uma  narrativa  de  domínio  que  seja coesa  e  legível, precisamos  não  apenas  dos  símbolos  de  objetos  e conceitos,  mas  também  dos símbolos de conexão/relação entre eles, e textos que possam nos explicar o que é necessário sobre essa relação, ou uma anotação no objeto.

### * Atores:

Narrativas de Domínio são histórias, e toda história possui seus atores (alguém lembrando  de  UML (Linguagem  de  modelagem  unificada) aqui?). Um  ator, atriz ou atores, podem ser uma pessoa, um grupo de pessoas, um objeto ou até mesmo um 
sistema.
A narrativa é  escrita na  perspectiva  dos  atores,  assim criando  a  história  que queremos aprender.

### * Objetos de Trabalho Objetos de trabalho:

São utilizados pelos atores. Estes podem ser documentos, objetos e interações físicas e digitais. Os atores interagem com os objetos de trabalho, criando assim o fluxo da narrativa.

### * Atividades:

As  atividades  são  as  ações  dos atores  para  com  os objetos  de trabalho.  As atividades  são  representadas  pelas  setas,  sempre  nomeadas pelas  ações  sendo tomadas – Exemplos de Atividades:

```Cliente --solicita--> Informações sobre algo --ao--> Atendente```

Vale notar:

1. Não existem condicionais (if - else), e não é por acaso, queremos focar no que é importante no fluxo da história. Cada condicional será tratado com uma nova história, mas veremos isso depois.

2.  Não  utilize  retornos  (loopbacks)  no  mesmo  fluxo. Como  programadores, queremos mostrar que há o retorno ao cliente ou ao servidor, mas o que queremos aqui é apenas contar uma história, então, ao invés disso, contamos uma história em que  o  intento  do ator  é  de  suma  importância  e  não  a  sua  interação.  Isso pode  ser explorado utilizando outras técnicas (tal como BPMN).

### * Números Sequenciais:

Para  que  seja  realmente  boa, toda  história precisa  não  apenas  de  um  bom roteiro, mas também possuir uma sequência lógica. Em Domain Storytelling, temos os Números Sequenciais  que  nos  guiam por  meio da  história.

Ficam informados em cima das setas de Atividades.

Em  desenvolvimento  de  sistemas,  podemos  enfrentar situações  que serão executadas em paralelo. Sendo assim, as duas serão numeradas igualmente, porém é recomendado tomar muito cuidado ao fazer isso, e não utilizar constantemente.

´´´
Ponto importante:

quando estamos criando a história, temos que levar em conta que é o Domain Expert que conta a história, e podemos ter sequências lógicas vindo fora de ordem, o que demanda ajustar a numeração.

Anotações Como o nome já diz, são anotações que realizamos ao documentar a história. Tais  anotações  contêm  informações  importantes,  tais  como  limitações  naquela atividade, ações que devem ser tomadas, gatilhos para outros processos ou eventos etc.
´´´

### * Grupos: 

Grupos são representações de partes de uma história. Por exemplo, ações que são repetidas constantemente, subdomínios, limitações do processo etc. Grupos são representados por linhas de limite no nosso design.

### * Cores:

Muitas  vezes  podemos  utilizar  cores  para  trazer  ênfase à  uma  série  de atividades, destacando assim uma particularidade.