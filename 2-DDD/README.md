# PÓS FIAP FULL STACK DEVELOPER

[Home](../README.md)/

## SUMÁRIO
- [Uma introdução](#uma-introdução)
- [Domain story telling](./1-Domain-story-telling/README.md)

## Uma introdução
O que é?

### Desafios de projetos
1. Falta de clareza nos objetivos
1. Scope creep (escopo dinamico - mudando toda hora)
1. Expectativas irreais
1. Recursos limitados
1. Falha na comunicação
1. Atraso nas entregas
1. Falta de transparência

```txt
 O conhecimento do negócio nunca é centralizado, times de desenvolvimento precisam balancear e priorizar as necessidades e requisições  de negócios de múltiplos membros do time além de se engaar com diversas pessoas que possuem habilidades muito distintas, tudo isso com o objetivo de descrobrir os requerimentos funcionais e não funcionais do software
 ```

### O que é o Dominio?
É o negócio em si, aquilo que a empresa faz, é o motivo da empresa existir (propósito). Depende de contexto.

### E o subdomínio?
É o negócio que o diferencia dos outros no mercado; possui lógica complexa. Depende de contexto.

### O subdominio genérico?
É o conjunto de processos que são comuns no mercado; possui lógica complexa.

### Subdomínio de suporte?
Apoia o negócio da empresa. Esse não dá nenhuma vantagem estratégica para o negócio, mas, sim, complementa o que o Principal faz.


```bash
├── A Solução pode ser comprada?
│   ├── Sim
│       ├── Pode arriscar o Negócio?
│           ├── Não
│               ├── Subdomínio genérico 
|
│           ├── Sim
│               ├── Subdomínio principal
|
│   ├── Não
│       ├── Lógica de negócio é complexa?
│           ├── Não
│               ├── Subdomínio de suporte
|
│           ├── Sim
│               ├── Subdomínio principal
```

### Domain expert
Todos que possam nos dar uma visão de como tudo funciona, que conhece do negócio. Que é capaz de descrever todos os processos e procedimentos. Quem conta a história, até os pormenores.

