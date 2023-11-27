//#region Imports/Exports/Variaveis
import PromptSync from "prompt-sync";
import { Alunos } from "./classes/Alunos.js";
import { Cursos} from "./classes/Cursos.js";
import { Disciplinas } from "./classes/Disciplinas.js";

export const prompt = PromptSync();

const alunosManager = new Alunos();
const cursosManager = new Cursos();
const disciplinasManager = new Disciplinas();
//#endregion

//#region Menu Principal
while (true) {
  console.log(`
  \nMENU:
  1. Gerenciar Alunos
  2. Gerenciar Disciplinas
  3. Gerenciar Cursos
  4. Sair\n`);

  const opcaoMenu: string = prompt("Escolha uma opção:");

  switch (opcaoMenu) {
    case "1":
      gerenciarAlunos();
      break;
    case "2":
      gerenciarDisciplinas();
      break;
    case "3":
      gerenciarCursos();
      break;
    case "4":
      console.clear();
      process.exit(0); // Encerrar o programa
    default:
      console.log("Opção inválida!");
      break;
  }
}
//#endregion

//#region Menu de Alunos
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
        const nome: string = prompt("Digite o nome do aluno: ");
        const idade: number = parseInt(prompt("Digite a idade do aluno: "));
        const cursosAluno: Cursos[] = []; 

        let adicionarcurso: boolean = true;
        
        while(adicionarcurso){
          console.clear();
          console.log("\nCursos disponíveis:");
          cursosManager.consultar();
          let indiceCurso = parseInt(prompt("Digite o indice do curso escolhido: "));
          if (indiceCurso < 0 || indiceCurso >= cursosManager.consultar.length) {
            console.log("Índice inválido!");
            return;
          }
          cursosAluno.push(cursosManager.obterCursoPorIndice(indiceCurso - 1))
          console.log(`\nDeseja adicionar outro curso:
                        \n1- Sim
                        \n2- Nao`)
          const opcao: string | null = prompt("Escolha uma opção:");
          switch (opcao){
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
//#endregion

//#region Menu de Disciplinas
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
        const indiceAtualizar = parseInt(
          prompt("Digite o índice da disciplina a ser atualizada:")
        );
        console.clear();
        const nomeAtualizar = prompt("Digite o novo nome da disciplina:");
        const cargaHorariaAtualizar = parseInt(
          prompt("Digite a nova carga horária da disciplina:")
        );
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
function gerenciarCursos(): void {
  while (true) {
    console.log(`
    \nSUBMENU - Gerenciar Cursos:
    1. Cadastrar Curso
    2. Consultar Curso
    3. Remover Curso
    4. Atualizar Curso
    5. Voltar ao MENU principal\n`);

    const menuOpcao: string | null = prompt("Escolha uma opção:");

    switch (menuOpcao) {
      //Cadastrar
      case "1":
        console.clear();
        const nome = prompt("Digite o nome do curso:");
        const turno = prompt("Digite o turno do curso:");

        const disciplinas: Disciplinas[] = []; 

        //variavel para loop de adicionar mais de 1 disciplina
        let adicionarDisciplina: boolean = true;

        while(adicionarDisciplina){
          console.clear();
          console.log("\nDisciplinas disponíveis:");
          disciplinasManager.consultar();
          let indiceDisciplina = parseInt(prompt("Digite o indice da disciplina escolhida: "));
          // if (indiceDisciplina < 0 || indiceDisciplina >= disciplinasManager.consultar.length) {
          //   console.log("Índice inválido!");
          //   return;
          // }

          disciplinas.push(disciplinasManager.obterDisciplinaPorIndice(indiceDisciplina - 1))
          console.log(`\nDeseja adicionar outras disciplinas:
                        \n1- Sim
                        \n2- Nao`)
          const opcao: string | null = prompt("Escolha uma opção:");
          switch (opcao){
            case "1":
              break;
            case "2":
              adicionarDisciplina = false;
              break;
            default:
              console.log("Opção inválida!");
              adicionarDisciplina = false;
              break;
          }
        }
        cursosManager.cadastrar(nome, turno, disciplinas)
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
        const indiceRemocao = parseInt(
          prompt("Digite o índice do curso a ser removido:")
        );
        cursosManager.remover(indiceRemocao - 1);
        break;
      //Atualizar
      case "4":
        console.clear();
        cursosManager.consultar();
        const indiceAtualizacao = parseInt(
          prompt("Digite o índice do curso a ser atualizado:")
        );
        console.clear()
        const nomeAtualizacao = prompt("Digite o novo nome do curso:");
        const turnoAtualizacao = prompt("Digite o novo turno do curso:");
        //implementar a atualização das disciplinas no curso
        // const notaAtualizacao = prompt("Digite a nova nota da disciplina:");

        // cursosManager.atualizar(
        //   indiceAtualizacao - 1,
        //   nomeAtualizacao,
        //   turnoAtualizacao,
        //   notaAtualizacao
        // );
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


