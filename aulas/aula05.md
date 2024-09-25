# Aula 05 - Módulo B

Tema: Variáveis e tipos primitivos
Link: [aula 05](https://youtu.be/Vbabsye7mWo)

Variáveis e tipos primitivos

Comentários:

// - única linha

/* 

mais de uma linha de código

*/

Os símbolos de comentários so servem para dentro do JS (<script></script>), html e CSS não serve

‘null’ = nada no JS

- Variável:

var 

- Atribuição:

Ex:.

var n1 = 5

var n2 = 8.5

var n3 = 15

- Também posso usar var para strings:

var s1 = ‘Davi Araujo’

var s2 = `Java Script`

var s3 = “programar”

*No JS, posso utilizar esses 3 tipos de aspas (’’ `` ””)

*No JavaScript moderno, além de utilizar a palavra var, também podemos usar a palavra let.

- Identificador:

Nome de cada variável (ex:. var s1)

Regras para identificadores:

- Podem começar com **letra**, **$** ou **_**
- Não podem começar com números (posso ter var s1, mas **nunca var 1s**)
- É possível usar **letras** ou **números**
- É possível usar **acentos** e **símbolos**
- Não podem conter **espaços** (substituir por **_** )
- Não podem ser **palavras reservadas** (comandos no JS. Ex:. **alert**)

Dicas na escolha de identificadores:

- **Maiúsculas** e **minúsculas** fazem a diferença (var a e var A são variáveis diferentes)
- Tente escolher **nomes coerentes** para as variáveis
- Evite se tornar um ‘programador alfabeto’ ou um ‘programador contador’ (so usa variavéis x,y,z ou 1,2,3…)

Variáveis servem para guardar dados

- int (representado por **number** em JS)
- float (também representado por **number** em JS)
- string - cadeia de caracteres (conjunto de números podem ser strings, se conter traços (-), pontos(.) )
- boolean - True and False

Em JS existem outros tipos primitivos, mas esses 3 são os principais:

- number
- string
- boolean

Falando de outros tipos:

- Em number, tempos o **Infinity** e **NaN** (not a number)
- null - vazio
- undefined
- object - tem outros tipos dentro de object como Array - **null também é um object**
- function - um tipo primitivo em JS

***typeof** para trabalhar com tipos primitivos

Ex:

var n = 200

typeof n 

output: ‘number’