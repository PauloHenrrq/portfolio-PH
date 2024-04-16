/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos 
    que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário
        clicar em cima dele

        Passo 2 - indentificar o clique no botão

        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos'); 
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')
const botaoMenosProjetos = document.querySelector('.btn-mostrar-menos-projetos')

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
    botaoMenosProjetos.classList.add('adicionar')
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo1');
    });
}

const menosProjetos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMenosProjetos.addEventListener('click', () => {
    mostrarMenosProjetos();
    voltarBotao();
})

function mostrarMenosProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo1')
    });
}

function voltarBotao() {
    botaoMostrarProjetos.classList.remove('remover');
    botaoMenosProjetos.classList.remove('adicionar')
}
