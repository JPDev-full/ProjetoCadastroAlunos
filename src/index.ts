import PromptSync from "prompt-sync";
export const prompt = PromptSync();

import { cadastrarAluno } from "./alunos/aluno.js";
import { consultarAluno } from "./alunos/aluno.js";
import { removerAluno } from "./alunos/aluno.js";
import { atualizarAluno } from "./alunos/aluno.js";

while (true) {
  console.log(`
\nMENU:
1. Gerenciar ALUNOS
2. Gerenciar DISCIPLINAS
3. Gerenciar CURSOS
4. SAIR\n`);

  const opcaoMenu: string | null = prompt("Escolha uma opção:");

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
          cadastrarAluno();
          break;
        case "2":
          consultarAluno();
          break;
        case "3":
          removerAluno();
          break;
        case "4":
          atualizarAluno();
          break;
        case "5":
          break;
        default:
          console.log("Opção inválida!");
          break;
      }
    }
  }

  if (opcaoMenu === "4") {
    break;
  }
}
