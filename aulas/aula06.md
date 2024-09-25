# Aula 06 - Módulo B

Tema: Tratamento de dados  
Link: [aula 06](https://youtu.be/OJgu_KCCUSY)

Tratamento de dados

Manipulação de dados

Usando o comando ‘prompt’:

1. Vou guardar o meu prompt dentro de uma variável para poder usa-la e fazer coisas com a minha reposta
2. var nome = window.prompt(’Qual o seu nome?’)
3. Agora eu tenho um nome guardado na variável e tudo digitado no prompt vai pra dentro de ‘nome’
4. window.alert(’É um grande prazer te conhecer, ‘ + nome) - o sinal de + aqui tem a função de concatenação
- (Number + Number) para adição
- (string + string) para concatenação
- Usar o comando prompt vai retornar sempre uma string, digitando um número ou não
- Então se eu quero adicionar números digitando em um comando prompt, tenho que converter string em número
- Formar de fazer essa conversão de string —> número:
1. Number.parseInt(n) ou parseInt(n) - (vai converter para um número inteiro)
2. Number.parseFloat(n) - (conversão para um número real, podendo ser com vírgula)
3. Number(n) - versão simplificada que serve pra qualquer tipo de número

- Formas de fazer conversão de

       número —> string

1. String(n)
2. n.toString()

- var s = ‘Java Script’
- ‘Eu estou aprendendo s’  // não faz interpolação
- ‘Eu estou aprendendo’ + s  // usa concatenação
- `` Eu estou aprendendo ${s} ``  // usa template string (o símbolo do dólar significa ‘place holder’) - **fazendo dessa forma, eu uso crase (` `) entre meu script**

var s = ‘Java Script’

**s.length** - me diz quantas letras tem meu string - note que não tem () depois de length, sendo um ***atributo***

**s.toUpperCase()** - joga para maiúsculo - dessa vez uso (), sendo um ***método***

s.toLowerCase() - joga para minúsculo

// Formatando números:

var n1 = 150.5

para escrever com duas casa decimais:

n1.toFixed(2) - *toFixed (método interno de todos os numbers)*

para trocar ponto por vírgula:

n1.toFixed(2).replace(’ . ‘, ‘ , ‘)

- exemplo: quero escrever o número em formato de salário:
- n1.LocaleString(’pt-BR’ ,  {style: ‘currency’, currency: ‘BRL’})
- *LocaleString - vou localizar minha string por parte do mundo - então coloco BRL no final para brasil valor salarial*
- *entre minhas {}, vou colocar as configurações, os atributos - **é um objeto***
- para colocar em dólar, só trocar o currency: ‘BRL’ para ‘USD’ - para euro, trocar para ‘EUR’