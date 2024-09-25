# Aula 04 - Módulo A

Tema: Criando seu primeiro Script
Link: [aula 04](https://youtu.be/OmmJBfcMJA8)


HTML 5 - conteúdo

todo conteúdo ta dentro de um arquivo html

- html lang = ‘en’ - quer dizer que a linguagem do site ta em inglês, posso mudar pra português:
    
    html lang = ‘pt-br’
    

todo site tem duas áreas - head/body

- head - parte de configurações
- body - parte que vai aparecer na região branca do site

html é feita por tags - tudo que está entre sinal de < e > 

exemplo - tag <meta>:

- pode ser usada para configuração de caracteres, para acentuações da língua;
- pode ser usada para configuração da viewport;
- pode ser usada para compatibilidade - ex: content=ie=edge (compatível com internet explorer e edge).

uma mesma tag pode ser usada várias vezes dentro do html

tag <title>:

- o título que fica la em cima na aba do site.

dentro do meu body:

- posso escrever o que quiser que vai aparecer no site, na área branca;
- se eu quiser transformar um escrito simples qualquer em um título dentro do body, uso <h1>título</h1>
- para criar um parágrafo, uso <p>texto</p>

Temos a parte de estilo do site - tag style

- <style></style> vem dentro do head - cabeça do site
- tudo que eu escrever dentro de <style></style>, é CSS, sendo o responsável pelo estilo do site, outra tecnologia
- No CSS, todo final de marcação tem ;

Fizemos a parte de conteúdo: html, de estilo: CSS, agora falta o meu script: JS

- O script vai vir geralmente dentro do corpo no final, antes do fechamento do body, para o script ser carregado depois do código base
- <script></script>
- Hoje em dia, em java script, não é necessário o ; no final de cada comando

Na criação de um site, tem que saber unir:

- Conteúdo - HTML
- Estilo - CSS
- Interatividade - JS