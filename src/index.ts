import PromptSync from "prompt-sync";
import { Alunos } from "./classes/Alunos.js";
import { Cursos } from "./classes/Cursos.js";
import { Disciplinas } from "./classes/Disciplinas.js";

export const prompt = PromptSync();

const alunosManager = new Alunos();
const cursosManager = new Cursos();
const disciplinasManager = new Disciplinas();

while (true) {
  console.log(`
  \nMENU:
  1. Gerenciar Alunos
  2. Gerenciar Cursos
  3. Gerenciar Disciplinas
  4. Sair\n`);

  const opcaoMenu: string = prompt("Escolha uma opção:");

  switch (opcaoMenu) {
    case "1":
      gerenciarAlunos();
      break;
    case "2":
      gerenciarCursos();
      break;
    case "3":
      gerenciarDisciplinas();
      break;
    case "4":
      console.clear();
      process.exit(0); // Encerrar o programa
    default:
      console.log("Opção inválida!");
      break;
  }
}

function gerenciarAlunos(): void {
  while (true) {
    console.log(`
    \nSUBMENU - Gerenciar Alunos:
    1. Cadastrar Aluno
    2. Consultar Alunos
    3. Remover Aluno
    4. Atualizar Aluno
    5. Voltar ao MENU principal\n`);

    const menuOpcao: string | null = prompt("Escolha uma opção:");

    switch (menuOpcao) {
      case "1":
        console.clear();
        const nome = prompt("Digite o nome do aluno: ");
        const idade = parseInt(prompt("Digite a idade do aluno: "));

        // Supondo que a lista de cursos esteja disponível na classe Cursos
        console.log("\nCursos disponíveis:");
        // Lógica para exibir cursos
        const cursos: Cursos[] = []; // Adapte conforme necessário

        alunosManager.cadastrar(nome, idade, cursos);
        break;
      case "2":
        console.clear();
        alunosManager.consultar();
        break;
      case "3":
        console.clear();
        const indexRemover = parseInt(
          prompt("Digite o índice do aluno a ser removido:")
        );
        alunosManager.remover(indexRemover - 1);
        break;
      case "4":
        console.clear();
        const indexAtualizar = parseInt(
          prompt("Digite o índice do aluno a ser atualizado:")
        );
        const nomeAtualizar = prompt("Digite o novo nome do aluno:");
        const idadeAtualizar = parseInt(
          prompt("Digite a nova idade do aluno:")
        );

        // Supondo que a lista de cursos esteja disponível na classe Cursos
        console.log("\nCursos disponíveis:");
        // Lógica para exibir cursos
        //const cursosAtualizar = []; // Adapte conforme necessário

        /*alunosManager.atualizar(
          indexAtualizar - 1,
          nomeAtualizar,
          idadeAtualizar,
          cursosAtualizar
        );*/
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

function gerenciarCursos(): void {
  // Implementar lógica para gerenciar cursos, se necessário
}

function gerenciarDisciplinas(): void {
  while (true) {
    console.log(`
    \nSUBMENU - Gerenciar Disciplinas:
    1. Cadastrar Disciplina
    2. Consultar Disciplinas
    3. Remover Disciplina
    4. Atualizar Disciplina
    5. Voltar ao MENU principal\n`);

    const menuOpcao: string | null = prompt("Escolha uma opção:");

    switch (menuOpcao) {
      case "1":
        console.clear();
        const nome = prompt("Digite o nome da disciplina:");
        const cargaHoraria = parseInt(
          prompt("Digite a carga horária da disciplina:")
        );
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
        const indexAtualizar = parseInt(
          prompt("Digite o índice da disciplina a ser atualizada:")
        );
        const nomeAtualizar = prompt("Digite o novo nome da disciplina:");
        const cargaHorariaAtualizar = parseInt(
          prompt("Digite a nova carga horária da disciplina:")
        );
        const notaAtualizar = prompt("Digite a nova nota da disciplina:");
        disciplinasManager.atualizar(
          indexAtualizar - 1,
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
