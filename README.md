# Secret Word

Um jogo simples e divertido de adivinhação de palavras desenvolvido em React, onde o jogador deve descobrir a palavra secreta com base em uma dica.

## Demonstração

https://mikaelcm.github.io/secret_word/

## Funcionalidades

<li> Interface simples e responsiva. </li>

<li> Sistema de pontuação. </li>

<li> Exibição de dica para cada categoria de palavra. </li>

<li> Controle de tentativas restantes. </li>

<li> Indicação de letras já utilizadas. </li>

<li> Tela de início, jogo e fim com pontuação final. </li>

## Estrutura do Projeto
src/
├── components/
│   ├── StartScreen.jsx
│   ├── Game.jsx
│   ├── End.jsx
│   ├── StartScreen.css
│   ├── Game.css
│   └── End.css
├── data/
│   └── words.jsx
├── App.jsx
└── index.js

## Tecnologias Utilizadas

<li> React.js </li>

<li> CSS3 (modularizado por componente) </li>

<li> JavaScript (ES6+) </li>

## Como jogar

Clique em “Começar o jogo”.

Observe a dica exibida (categoria).

Digite uma letra por vez para tentar adivinhar a palavra.

Cada acerto revela uma letra; cada erro consome uma tentativa.

O jogo termina quando:

Todas as letras são descobertas

Ou as tentativas acabam.

## Instalação e execução local
### Clone o repositório
git clone https://github.com/SEU_USUARIO/secret-word.git

### Entre na pasta do projeto
cd secret-word

### Instale as dependências
npm install

### Execute o projeto
npm run dev

## Estrutura lógica

StartScreen.jsx: tela inicial com botão para começar o jogo.

Game.jsx: lógica principal — renderiza as letras, pontuação e tentativas.

End.jsx: mostra a pontuação final e opção de recomeçar.

words.jsx: contém as categorias e palavras do jogo.

## Autor

Mikael Carvalho Mendes
Desenvolvedor Front-end | HTML • CSS • JavaScript • React

[Linkedin](https://www.linkedin.com/in/mikael-carvalho-mendes/)

[Github](https://github.com/MikaelCM)
