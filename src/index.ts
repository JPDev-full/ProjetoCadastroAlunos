import PromptSync from "prompt-sync";
export const prompt = PromptSync();

import { cadastrarAluno } from "./classes/aluno.js";
import { consultarAluno } from "./classes/aluno.js";
import { removerAluno } from "./classes/aluno.js";
import { atualizarAluno } from "./classes/aluno.js";

let runprogram: boolean = true;

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

      const opcaoSubMenu: string | null = prompt("Escolha uma opção:");

      switch (opcaoSubMenu) {
        case "1":
          console.clear();
          cadastrarAluno();
          break;
        case "2":
          console.clear();
          consultarAluno();
          break;
        case "3":
          console.clear();
          removerAluno();
          break;
        case "4":
          console.clear();
          atualizarAluno();
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
