import PromptSync from "prompt-sync";
export const prompt = PromptSync();

import { Alunos } from "./classes/alunos.js";
import { Cursos } from "./classes/cursos.js";

let runprogram: boolean = true;
const aluno = new Alunos();
const curso = new Cursos();
const disciplina = new Cursos();

while (runprogram) {
  console.log(`
\nMENU:
1. Gerenciar ALUNOS
2. Gerenciar DISCIPLINAS
3. Gerenciar CURSOS
4. SAIR\n`);

  const opcaoMenu: string | null = prompt("Escolha uma opção:");
  console.clear();

  if (opcaoMenu === "1") {
    while (true) {
      console.log(`
      \nSUBMENU - Gerenciar ALUNOS:
      1. Cadastrar ALUNO
      2. Consultar ALUNO
      3. Remover ALUNO
      4. Atualizar ALUNO
      5. Voltar ao MENU principal\n`);

      const menuAlunos: string | null = prompt("Escolha uma opção:");

      switch (menuAlunos) {
        case "1":
          console.clear();
          aluno.cadastrar();
          break;
        case "2":
          console.clear();
          aluno.consultar();
          break;
        case "3":
          console.clear();
          aluno.remover();
          break;
        case "4":
          console.clear();
          aluno.atualizar();
          break;
        case "5":
          console.clear();
          break;
        default:
          console.log("Opção inválida!");
          break;
      }
    }
  }

  if (opcaoMenu === "4") {
    runprogram = false;
    console.clear();
    break;
  }
}
