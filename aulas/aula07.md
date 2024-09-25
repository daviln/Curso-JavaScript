# Aula 07 - Módulo B

Tema: Operadores (parte 1)
Link: [aula 07](https://youtu.be/hZG9ODUdxHo)


Operadores do JS

O JS possui várias famílias de operadores

*Todo operador precisa de operandos - números para fazer as contas, fazem os operadores funcionarem*

*Se eu tiver 2 + 3 , tenho um operador binário, pois são dois operandos*

Vamos falar dos:

- aritméticos
- atribuição
- relacionais
- lógicos
- ternário

*O typeof é um tipo de operador

OPERADORES ARITMÉTICOS 

      ( + - * / % **)

- 5 + 2 —> 7
- 5 - 2 —> 3
- 5 * 2 —> 10
- 5 / 2 —> 2.5 (divisão real)
- 5 % 2 —> 1 (resto da divisão inteira)
- 5 ** 2 —>25

CUIDADO!

Se eu tenho 5 + 3 / 2 , a resposta vai ser 6.5, pois faz primeiro a divisão e depois a soma

ORDEM DE PRECEDÊNCIA

- ()
- **
- *  /  %
- + -

Se eu quiser guardar meus valores em algum lugar, uso Atribuição Simples (var)

- var a = 5 + 3       (8 vai ficar guardado na memória - variável a)
- var b = a % 5      (3 - variável b)
- var c = 5 * b ** 2  (faço primeiro o ** 45 - variável c)
- var d = 10 - a / 2    (6 - variável d)
- var e = 6 * 2 / d      (* e / tem a mesma ordem de precedência, então nesse caso resolvo quem aparecer primeiro  2 - variável e)
- var f = b % e + 4 / e  (3 - variável f)

Auto-atribuições

- var n = 3
- n = n + 4
- ***n deixou de valer 3 e agora vale 7***
- n = n - 5
- ***n deixou de valer 7, agora vale 2***
- Simplificando posso escrever ***(quando estou somando a mesma variável      n = n + x):***
- n += 4
- n -= 5
- n *= 4
- n /= 2
- n **= 2
- n%= 5

TODOS ESSE EM CIMA SÃO  OPERADORES DE ATRIBUIÇÃO

Incremento

- Posso simplificar:
    - x = x + 1 para x += 1
- Posso simplificar ainda mais para:
    - x ++
- O mesmo com subtração:
    - x = x - 1 —> x -=1 —> x--
- *Posso escrever também ++n e --n - dessa forma, mostra o valor já somado ou subtraído sem precisar pedir o novo valor de n*