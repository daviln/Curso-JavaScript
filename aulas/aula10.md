# Aula 10 - Módulo C

Tema: Eventos DOM
Link: [aula 10](https://youtu.be/wWnBB-mZIvY?si=LyVGTLgEY82jZ9Ny)

Recap DOM —> Um facilitador que existe dentro do navegador (dentro do HTML5), para dar acesso aos elementos, diretamente pro JavaScript

Sem o DOM, seria muito difícil de acesso os elementos da nossa página

- Cada página tem sua própria Árvore DOM

Eventos DOM:

Criei um div - evento é tudo aquilo que possa acontecer com essa div *(ou qualquer elemento, mas nesse exemplo, com a div)*

Coisas que podem acontecer com a div:

- Eventos de mouse:
    - mover o mouse até dentro da div —> dispara um evento chamado *mouseenter*
    - continuar movendo o mouse por dentro da div —> dispara o evento *mousemove*
    - se eu clicar e segurar dentro da div —> dispara o evento *mousedown*
    - soltei o mouse —> dispara o evento *mouseup*
    - apertar e soltar rapidamente —> dispara o evento *click*
    - mover o mouse para fora da div   —> dispara o evento *mouseout*
- Para mais eventos que podem acontecer —> pesquisar *javascript dom events list - events reference*

- Funções (funcionalidades):
    - Conjunto de códigos, de linhas que vão ser executadas só quando o evento ocorrer
        - Para eu fazer isso acontecer, tenho que seguir os passos:
            - Colocar o código dentro de um *bloco*
            - Nomear o bloco por *‘function’*
            - Para o método funcionar, tenho que dar um nome para a função
            - Ex:.
            
                  function ação(param) {
            
                  bloco       
            
                  } 
            
    - Ex:. programo 10 linhas (bloco) - esse bloco não vai executar automaticamente, ele só vai executar quando por ex eu clicar na minha div
    
    ***OBS:. Os eventos podem ser configurados na parte de HTML ou diretamente no código em JS***
    
- ***Se eu tiver algum erro no código, para ver qual o erro, ir em inspect dentro da página do site***