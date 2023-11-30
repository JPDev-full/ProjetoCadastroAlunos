# ProjetoCadastroAlunos

Objetivo

- O projeto teve como objetivo a criação de um sistemas em typescript aonde é possível cadastrar alunos, cursos e disciplinas.

Requisitos necessários para rodar o sistema.

- É necessário ter o Typescript instalado na IDE Visual Studio Code;
- É necessário instalar o prompt-sync;
- Possuir node.js e ts-node instalado.
- a configuração adequada para o tsconfig.json é a abaixo:

  {
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "rootDir": "./src",
    "moduleResolution": "Node",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"],
  "ts-node": {
    "esm": true // Tell ts-node CLI to install the --loader automatically
  }
}

  Para instalar o Typescript rodar o seguinte código no terminal do VS Code no respectivo projeto:

  npm i typescript

  O prompt-sync pode sert instalado com o seguinte comando:

  npm i prompt-sync

  O node.js pode ser instalado no site:

  https://nodejs.org/en/download

  E o ts-node com o seguinte comando:

  npm i ts-node

Arquitetura e Stack

Este sistema tem as classes dividas entre Alunos.ts, Cursos.ts e disciplinas.ts com o objetivo de facilitar a visualização das mesmas.

A estrutura do sistema está dividida nas pastas node_modules,src e utils.

Dentro das classes estão os métodos de cadastro, atualização, remoção e atualização.

No arquivo manager podemos encontrar os imports e exports encontrados no sistema.

O arquivos menus, contém a interface com o suário e também as condicionais switch case utilizado para navegar nas opções do menu e submenus. No mesmo arquivo podemos encontrar um loop while na opção adicionarCurso, adicionarDisciplinas, atualizarDisciplinaCurso além dos utlizados em atualizar curso e também no submenus gerenciar disciplinas, gerenciar cursos. O arquivo index.ts apenas faz o import da pasta utils/menus.js e possui um while true que leva ao menuPrincipal.

A lógica utilizada no caso concreto é a que tem de existir nesta sequência o cadastro de disciplinas, cursos para poder cadastrar o aluno, tendo em vista que sem disciplinas e cursos não há como existir alunos.


