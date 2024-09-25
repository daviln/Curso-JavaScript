# Aula 08 - Módulo B 

Tema: Operadores (parte 2)  
Link: [aula 08](https://youtu.be/BP63NhITvao)

Operadores do JS (parte 2)

Operadores ***relacionais, lógicos e ternário***

RELACIONAIS

- >
- <
- >=
- <=
- ==
- !=

Para toda expressão que tenha um operador *relacional* ligado a ela, o resultado vai ser um ***boolean value: true or false***

- 5 > 2 —> true
- 7 < 4 —> false
- 8 >= 8 —> true
- 9 <= 7 —> false
- 5 == 5 —> true
- 4 != 4 —> false

***Obs:. Se eu tiver uma expressão com operadores relacionais e aritméticos, primeiro é feito os operadores aritméticos e depois os relacionais***

Operadores relacionais - IDENTIDADE

5 == 5 —> true

5 == ‘5’ —> true

***Para o JS, os dois são iguais - o sinal de igualdade não testa o tipo (primitivo) - O JS analisa se o valor do number 5 é o mesmo do string 5, e sim é o mesmo valor, mesmo sendo de tipos diferentes***

Usando o operador de IDENTIDADE (operador de igualdade restrita):

5 === ‘5' —> false (3 sinais de iguais - quero saber se os dois 5 são *idênticos (mesmo valor e mesmo tipo)*)

5 === 5 —> true

O mesmo funciona para sinal de diferente:

5 != ‘5’ —> false

Usando o sinal de *desigual restrito:*

5 !== ‘5’ —> true (mesmo valor interno, tipos diferentes)

LÓGICOS

- ! - negação
- && - conjunção (nosso ‘e’ lógico)
- || - disjunção (nosso ‘ou’ lógico)

Negação (!):

- tratado como operador *unário - só tem um operando*
- ! true —> false
- ! false —> true
- Posso colocar uma expressão na frente da ! também

Conjunção (&&):

- tratado como operador *binário - tem dois valores lógicos, um de cada lado, resultando em um resultado lógico*
- true && true —> true
- true && false —> false
- false && true —> false
- false && false —> false

*Quero as duas, então só vai ser true se eu tiver true && true (consegui a primeira E consegui a segunda)*

Disjunção (||):

- true || true —> true
- true || false —> true
- false || true —> true
- false || false —> false

*Quero um ou o outro, então basta que um seja true para ser true - só vai ser false quando os dois forem false, não tenho nem um, nem o outro, sendo que eu quero pelo menos um (um OU o outro)*

Se eu tiver uma expressão:

a > b && b % 2 == 0

Ordem de conta:

1. Operadores aritméticos (%)
2. Operadores relacionais (>)
3. Operadores lógicos (&&)

Se eu tiver numa mesma expressão negação (!), conjunção (&&) e disjunção (||), a ordem de conta é sempre:

1. negação (não)
2. conjunção (e)
3. disjunção (ou)

TERNÁRIO

São os dois (? e :) em uma mesma expressão

- ?
- :

Junta 3 operandos (ternário):

teste ? true : false

- exemplo 1:

var media = 5.5

media > 7 ? ‘aprovado’ : ‘reprovado’

output: ‘reprovado’

*se o teste for true, ‘aprovado’ , se for false, ‘reprovado’*

- exemplo 2:

> var x = 8
undefined
var res = x % 2 == 0 ? 5 : 9
undefined
x
8
res
5
> 

- exemplo 3:

> var idade = 20
undefined
idade >= 21 ? 'maior' : 'menor'
'menor'
>