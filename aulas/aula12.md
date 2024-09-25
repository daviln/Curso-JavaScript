# Aula 12 - Módulo D

Tema: Condicões (parte 2)
Link: [aula 12](https://youtu.be/EEStcIe8rAM)

Condições Aninhadas

- Uma condição dentro da outra
- else if

if (cond1) {

    bloco 1

} else {

if (cond2) {

    bloco 2

} else {

    bloco 3

}

}

Condição Múltiplas 

- *Serve para valores fixos - útil pra isso*
- *Não serve muito para intervalos de valores*
- *Tem a possibilidade não somente do sim e do não, mas de outros valores (fixos)*
- *Não é aplicável para todo tipo de situação como if/else*
- *Muito útil para situações pontuais, específicas*

- comando switch
- switch (expressão) {
    - case valor 1:
        - bloco
        - break
    - case valor 2:
        - bloco
        - break
    - case valor 3:
        - bloco
        - break
    - default:
        - bloco
        - break
- }
- //no switch, não é uma *condição* como no if, é uma *expressão*
- //default é como se fosse o else do switch
- //dentro de cada bloco no switch, tenho um ***break*** (obrigatório - somente na última é opcional)

***Obs:. Se precisar trabalhar com intervalos, melhor usar o if***

Switch é uma estrutura mais limitada que o if, mas muito útil em situações pontuais