# Aula 09 - Módulo C

Tema: Introdução ao DOM
Link: [aula 09](https://youtu.be/WWZX8RWLxIk)

Entendendo o DOM

Desenvolver em JS para front end

Recap

dentro do meu <body></body>

- <h1>uso h1 para texto</h1>
- <p>uso p para parágrafo, escrevo um texto e vai sair na linha debaixo - a formatação de fonte, tamanho da letra também muda usando p</p>

O que é DOM?

- Document Object Model
- Um modelo de objetos para documento - conjunto de objetos dentro do meu navegador que vai dar acesso aos componentes internos do meu website
- Não funciona dentro do node.js
- Ta presente quando eu to rodando o JS dentro do navegador

Árvore DOM:

- window - raiz (tudo dentro do JS está dentro de um objeto chamado window) - a janela do navegador é um objeto DOM chamado window.                    *Dentro do window, tenho outros objetos:*
    - location - localização do site (URL, página atual, página anterior)
    - history - vai guardando de onde você veio, para onde você vai (facilita a navegação dentro do site)
    - document - documento atual               *Dentro de document, tenho:*
        - HTML (Parent de body, Child de document)
            - head
                - meta
                - title
            - body
                - h1
                - p
                    - strong
                - div

Tudo dentro da Árvore DOM é chamado ***elemento***, cada coisa

Posso selecionar elementos para navegar dentro da Árvore DOM

Métodos de acesso (selecionar elementos DOM dentro do JS) - técnicas para acessar elementos dentro do JS usando DOM:

- **por Marca** - ou por tagname (**getElementsByTagName()**) - consigo selecionar mais de um objeto, por exemplo, se eu tiver dois parágrafos no código, tenho duas tags <p>
- **por ID** - identificar um parágrafo ou a div por ID (**getElementById()**)
- **por Nome** - posso usar o nome do objeto (**getElementsByName()**)
- **por Classe** - (**getElementsByClassName()**)
- **por Seletor** - forma nova e recomendável - prático para quando estou fazendo alterações mais rápidas no site                          **(querySelector()) - (querySelectorAll())**

Formas de adicionar componentes no código usando DOM em JS:

- dentro do meu script
- window.document.write(window.navigator.appName) - mostra o navegador
- window.document.write(window.document.URL) - mostra a url do site
- window.document.write(’Olá Mundo!’) - escreve Olá Mundo! na tela do site

***Obs: toda div é representada por uma #, toda classe é representada por um .***