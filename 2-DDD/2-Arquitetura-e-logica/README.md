# PÓS FIAP FULL STACK DEVELOPER

[Home](./../../README.md)/[DDD](./../README.md)/

# Sumario

* [Design tático](#design-tático)
* [Arquitetura](#arquitetura)
    * [Camada de interface do usuário](#camada-de-interface-do-usuário)
    * [Camada de Aplicação](#camada-de-aplicação)
    * [Camada de domínio](#camada-de-domínio)
    * [Camada de Infraestrutura](#camada-de-infraestrutura)
* [Objetos de valor - Value objects](#objetos-de-valor-value-objects)
* [Entidades](#entidades)
* [Agregados (Aggregate)](#agregados-aggregate)
* [Serviços de domínio (Domain services)](#serviços-de-domínio-domain-services)


## Design tático

Momento em que analisa-se o “como”. 

### Arquitetura

Criar o desenho do sistema, como cada subdomínio será implementado, onde ficarão as lógicas e suas devidas partes.

O DDD organiza sua arquitetura em quatro (4) partes:

#### Camada de interface do usuário

Essa é a camada que contém a Interface do usuário (GUI), interfaces de linha de comando (CLI) e APIs para integração com outros sistemas.

#### Camada de Aplicação

Nesta  camada  temos  interfaces  que  fazem  a  mediação entre  a  camada  de interface do usuário e a camada de domínio.

Por exemplo, essa camada não contém lógica  de  negócios,  não  altera  o  estado  de  objetos, mas  monitora  e  reporta  essas mudanças a camada superior. Também é a camada que organiza as tarefas que o sistema  tem  que  realizar.  

Importante  ressaltar que,  **em  algumas  arquiteturas,  essa camada não existe**, ela é integrada à camada de interface de usuário.

Nesta   camada podemos  definir  as  rotinas  que  são  os  “gatilhos”  para atualizações em massa do sistema.

#### Camada de domínio

"O coração do Software”, como denominado por Eric Evans (2003), é a camada que contém os conceitos de negócios, onde estão todas as regras de negócio. É nessa camada que a lógica de negócio é executada, as mudanças de estado acontecem e os registros e afins são criados. Essa camada não armazena os dados, mas provê as devidas informações para serem registradas à Camada de Infraestrutura.

É nessa camada por exemplo,  que  teríamos  toda  a  lógica  de  notas  dos alunos,  considerando  que  os mesmos  entregaram  na  data  ou  não,  e  assim  calcular  o desconto  na  nota,  ou  até mesmo a lógica por trás dos planos de aula e como são aplicados e avaliados.

#### Camada de Infraestrutura 

Essa é a camada que possui as capacidades técnicas de suporte às camadas superiores. Aqui existem os meios de mensageria, persistência de dados e é utilizada como o padrão de interações entre as camadas (caso não haja integração direta entre elas).

### Objetos de valor (Value objects)

Objetos de valor são reconhecidos por não possuírem identificadores, sendo assim, usamos seus  valores  para  os  distinguir  um  do  outro.  Cada  um é  único  e imutável (o valor é criado como um todo e não muda depois de sua criação).

Assim mantemos a unicidade da lista de objetos de valor, o que nos obriga a fazer uma checagem do objeto antes de criá-lo.

### Entidades

Entidades, ao contrário do que encontramos com Objetos de Valor, possuem identificadores, e são mutáveis, ou seja, cada um tem um ID único que nunca mais será utilizado por outros, dessa forma, a imutabilidade é impossível, pois a Entidade pode e deve ser alterada depois de criada.

Se um  novo  Objeto for  inserido  nessa  tabela, diferente dos  objetos  de  valor, não temos que verificar se seus valores existem, por exemplo, se tentarmos inserir (“Nome 3”, “03/01/200”, “Rua 3”), este será inserido, independente de existir, pois teremos um índice novo. 

Em  caso  de  alteramos  um  valor,  utilizamos  o  seu  índice para  encontrá-lo na lista, e então podemos alterar o que for necessário.

### Agregados (Aggregate)

Um agregado  é  um  conjunto  de entidades  e objetos  de valor,  que  mantém relacionamentos entre si e possui um limite que o circunda e define.

Uma  das  premissas  básicas  de agregados é a consistência forçada, que garante a integridade de dados.

Ou seja, somente a lógica do agregado pode alterar o seu estado, garantindo assim que a lógica de negócio que o define seja garantida sempre.

**Nenhum objeto fora do agregado pode alterar o seu estado.** Esse pode ler seu estado,  mas  não  pode  alterar,  isso é  feito somente  pelo  próprio agregado,  porém, entidades externas podem solicitar que o agregado execute ações que alterem seu estado.

### Serviços de domínio (Domain services)

Serviços de domínio são objetos tratados separadamente, e que trabalham com diversas entidades e agregados, sempre que são necessários cálculos, execuções de rotinas e muito mais.