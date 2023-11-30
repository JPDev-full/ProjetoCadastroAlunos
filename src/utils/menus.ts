// menus.js
import { Cursos } from "../classes/Cursos.js";
import { Disciplinas } from "../classes/Disciplinas.js";
import {
  alunosManager,
  cursosManager,
  disciplinasManager,
  prompt,
} from "./manager.js";

//#region Menu Principal
export function menuPrincipal() {
  console.clear();
  console.log(`
  \nMENU:
  1. Gerenciar Alunos
  2. Gerenciar Disciplinas
  3. Gerenciar Cursos
  4. Sair\n`);

  const opcaoMenu: string = prompt("Escolha uma opção:");

  switch (opcaoMenu) {
    case "1":
      menuAlunos();
      break;
    case "2":
      menuDisciplinas();
      break;
    case "3":
      menuCursos();
      break;
    case "4":
      console.clear();
      process.exit(0); // Encerrar o programa
    default:
      console.clear();
      console.log("Opção inválida!");
      break;
  }
}
//#endregion

//#region Menu de Alunos
export function menuAlunos() {
  console.clear();
  while (true) {
    console.log(`
    \nSUBMENU - Gerenciar Alunos:
    1. Cadastrar Aluno
    2. Consultar Alunos
    3. Remover Aluno
    4. Atualizar Aluno
    5. Voltar ao MENU principal\n`);

    const menuAlunosOpcao: string | null = prompt("Escolha uma opção:");

    switch (menuAlunosOpcao) {
      case "1":
        console.clear();
        if (cursosManager.obterCursoPorIndice(0) == undefined) {
          console.clear();
          console.log(
            "Ainda não existem cursos cadastrados, realizar o cadastro de pelo menos um antes de cadastrar um aluno!"
          );
          return;
        }
        const nome: string = prompt("Digite o nome do aluno: ");
        const idade: number = parseInt(prompt("Digite a idade do aluno: "));
        if (Number.isNaN(idade) || idade == undefined) {
          console.log("Idade invalida, aluno nao cadastrado!");
          return;
        }
        const cursosAluno: Cursos[] = [];

        let adicionarcurso: boolean = true;

        while (adicionarcurso) {
          console.clear();
          cursosManager.consultar();
          let indiceCurso = parseInt(
            prompt("Digite o indice do curso escolhido: ")
          );
          let cursoEscolhido = cursosManager.obterCursoPorIndice(
            indiceCurso - 1
          );
          if (cursoEscolhido == undefined) {
            console.log("Indice do curso invalido!");
            console.log("Aluno nao cadastrado!");
            return;
          }
          cursosAluno.push(cursoEscolhido);
          console.log(`\nDeseja adicionar outro curso:
                        \n1- Sim\n2- Nao\n`);
          const opcao: string | null = prompt("Escolha uma opção:");
          switch (opcao) {
            case "1":
              break;
            case "2":
              adicionarcurso = false;
              break;
            default:
              console.log("Opção inválida!");
              adicionarcurso = false;
              break;
          }
        }
        alunosManager.cadastrar(nome, idade, cursosAluno);
        break;
      case "2":
        console.clear();
        alunosManager.consultar();
        break;
      case "3":
        console.clear();
        alunosManager.consultar();
        const indexRemover = parseInt(
          prompt("Digite o índice do aluno a ser removido:")
        );
        alunosManager.remover(indexRemover - 1);
        break;
      case "4":
        console.clear();
        alunosManager.consultar();
        const indexAtualizar = parseInt(
          prompt("Digite o índice do aluno a ser atualizado:")
        );
        if (alunosManager.obterAlunoPorIndice(indexAtualizar - 1) == undefined ) {
           console.log("Indice do aluno invalido!")
           return
        }
        const nomeAtualizar = prompt("Digite o novo nome do aluno:");
        const idadeAtualizar = parseInt(
          prompt("Digite a nova idade do aluno:")
        );
        if (Number.isNaN(idadeAtualizar) || idadeAtualizar == undefined) {
          console.log("Idade invalida, aluno nao atualizado!");
          return;
        }
        const cursosAlunoAtualizados: Cursos[] = [];

        let atualizarCursoAluno: boolean = true;

        while (atualizarCursoAluno) {
          console.clear();
          cursosManager.consultar();
          let indiceCurso = parseInt(
            prompt("Digite o indice do curso escolhido: ")
          );
          let cursoEscolhido = cursosManager.obterCursoPorIndice(
            indiceCurso - 1
          );
          if (cursoEscolhido == undefined) {
            console.clear();
            console.log("Indice do curso invalido!");
            console.log("Aluno nao Atualizado!");
            return;
          }
          cursosAlunoAtualizados.push(cursoEscolhido);
          console.log(`\nDeseja adicionar outros cursos:
                        \n1- Sim\n2- Nao\n`);
          const opcao: string | null = prompt("Escolha uma opção:");
          switch (opcao) {
            case "1":
              break;
            case "2":
              atualizarCursoAluno = false;
              break;
            default:
              console.log("Opção inválida!");
              atualizarCursoAluno = false;
              break;
          }
        }
        alunosManager.atualizar(
          indexAtualizar - 1,
          nomeAtualizar,
          idadeAtualizar,
          cursosAlunoAtualizados
        );
        break;
      case "5":
        console.clear();
        return;
      default:
        console.log("Opção inválida!");
        break;
    }
  }
}
//#endregion

//#region Menu de Disciplinas
export function menuDisciplinas() {
  console.clear();
  while (true) {
    console.log(`
    \nSUBMENU - Gerenciar Disciplinas:
    1. Cadastrar Disciplina
    2. Consultar Disciplinas
    3. Remover Disciplina
    4. Atualizar Disciplina
    5. Voltar ao MENU principal\n`);

    const menuDisciplinasOpcao: string | null = prompt("Escolha uma opção:");

    switch (menuDisciplinasOpcao) {
      case "1":
        console.clear();
        const nome = prompt("Digite o nome da disciplina:");
        const cargaHoraria = parseInt(
          prompt("Digite a carga horária da disciplina:")
        );
        if (Number.isNaN(cargaHoraria) || cargaHoraria == undefined) {
          console.log(
            "Valor invalido para carga horaria, disciplina nao cadastrada!"
          );
          return;
        }
        const nota = prompt("Digite a nota da disciplina:");

        disciplinasManager.cadastrar(nome, cargaHoraria, nota);
        break;
      case "2":
        console.clear();
        disciplinasManager.consultar();
        break;
      case "3":
        console.clear();
        disciplinasManager.consultar();
        const indexRemover = parseInt(
          prompt("Digite o índice da disciplina a ser removida:")
        );
        disciplinasManager.remover(indexRemover - 1);
        break;
      case "4":
        console.clear();
        disciplinasManager.consultar();
        const indiceAtualizar = parseInt(
          prompt("Digite o índice da disciplina a ser atualizada:")
        );
        if (
          disciplinasManager.obterDisciplinaPorIndice(indiceAtualizar - 1) ==
          undefined
        ) {
          console.log("Indice invalido!");
          return;
        }
        console.clear();
        const nomeAtualizar = prompt("Digite o novo nome da disciplina:");
        const cargaHorariaAtualizar = parseInt(
          prompt("Digite a nova carga horária da disciplina:")
        );
        if (
          Number.isNaN(cargaHorariaAtualizar) ||
          cargaHorariaAtualizar == undefined
        ) {
          console.log(
            "Valor invalido para carga horaria, disciplina nao atualizada!"
          );
          return;
        }
        const notaAtualizar = prompt("Digite a nova nota da disciplina:");
        disciplinasManager.atualizar(
          indiceAtualizar - 1,
          nomeAtualizar,
          cargaHorariaAtualizar,
          notaAtualizar
        );
        break;
      case "5":
        console.clear();
        return;
      default:
        console.log("Opção inválida!");
        break;
    }
  }
}
//#endregion

//#region Menu de Cursos
export function menuCursos() {
  console.clear();
  while (true) {
    console.log(`
    \nSUBMENU - Gerenciar Cursos:
    1. Cadastrar Curso
    2. Consultar Curso
    3. Remover Curso
    4. Atualizar Curso
    5. Voltar ao MENU principal\n`);

    const menuCursosOpcao: string | null = prompt("Escolha uma opção:");

    switch (menuCursosOpcao) {
      //Cadastrar
      case "1":
        console.clear();
        if (disciplinasManager.obterDisciplinaPorIndice(0) == undefined) {
          console.clear();
          console.log(
            "Ainda não existem disciplinas cadastradas, realizar o cadastro de pelo menos uma antes de cadastrar um curso!"
          );
          return;
        }
        const nome = prompt("Digite o nome do curso:");
        const turno = prompt("Digite o turno do curso:");

        const disciplinas: Disciplinas[] = [];

        //variavel para loop de adicionar mais de 1 disciplina
        let adicionarDisciplina: boolean = true;

        while (adicionarDisciplina) {
          console.clear();
          disciplinasManager.consultar();
          let indiceDisciplina = parseInt(
            prompt("Digite o indice da disciplina escolhida: ")
          );
          let disciplinaEscolhida = disciplinasManager.obterDisciplinaPorIndice(
            indiceDisciplina - 1
          );
          if (disciplinaEscolhida == undefined) {
            console.clear();
            console.log("Indice de disciplina invalido!");
            console.log("Curso não cadastrado!");
            return;
          }
          disciplinas.push(disciplinaEscolhida);
          console.clear();
          console.log(`\nDeseja adicionar outras disciplinas:
                        \n1- Sim\n2- Nao\n`);
          const opcao: string | null = prompt("Escolha uma opção:");
          switch (opcao) {
            case "1":
              console.clear();
              break;
            case "2":
              console.clear();
              adicionarDisciplina = false;
              break;
            default:
              console.clear();
              console.log("Opção inválida!");
              adicionarDisciplina = false;
              break;
          }
        }
        cursosManager.cadastrar(nome, turno, disciplinas);
        break;
      //Consultar
      case "2":
        console.clear();
        cursosManager.consultar();
        break;
      //Remover
      case "3":
        console.clear();
        cursosManager.consultar();
        const indexRemover = parseInt(
          prompt("Digite o índice do curso a ser removido:")
        );
        cursosManager.remover(indexRemover - 1);
        break;
      //Atualizar
      case "4":
        console.clear();
        cursosManager.consultar();
        const indiceAtualizacao = parseInt(
          prompt("Digite o índice do curso a ser atualizado:")
        );
        if (
          cursosManager.obterCursoPorIndice(indiceAtualizacao - 1) == undefined
        ) {
          console.log("Indice invalido!");
          console.log("Curso nao atualizado!");
          return;
        }
        console.clear();
        const nomeAtualizacao = prompt("Digite o novo nome do curso:");
        const turnoAtualizacao = prompt("Digite o novo turno do curso:");

        const disciplinasCursoAtualizadas: Disciplinas[] = [];

        let atualizarDisciplinaCurso: boolean = true;

        while (atualizarDisciplinaCurso) {
          console.clear();
          disciplinasManager.consultar();
          let indiceDisciplina = parseInt(
            prompt("Digite o indice da disciplina escolhida: ")
          );
          let disciplinaEscolhida = disciplinasManager.obterDisciplinaPorIndice(
            indiceDisciplina - 1
          );
          if (disciplinaEscolhida == undefined) {
            console.clear();
            console.log("Indice da disciplina invalido!");
            console.log("Curso nao atualizado!");
            return;
          }
          disciplinasCursoAtualizadas.push(disciplinaEscolhida);
          console.log(`\nDeseja adicionar outras disciplinas:
                        \n1- Sim\n2- Nao\n`);
          const opcao: string | null = prompt("Escolha uma opção:");
          switch (opcao) {
            case "1":
              break;
            case "2":
              atualizarDisciplinaCurso = false;
              break;
            default:
              console.log("Opção inválida!");
              atualizarDisciplinaCurso = false;
              break;
          }
        }
        cursosManager.atualizar(
          indiceAtualizacao - 1,
          nomeAtualizacao,
          turnoAtualizacao,
          disciplinasCursoAtualizadas
        );
        break;
      case "5":
        console.clear();
        return;
      default:
        console.log("Opção inválida!");
        break;
    }
  }
}
//#endregion
