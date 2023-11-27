import { Cursos } from "../classes/cursos.js";
import { prompt } from "../index.js";

export class Alunos {
  nome: string = "";
  idade: number = 0;
  cursos: Cursos[] = [];

  constructor() {}

  cadastrar(): void {
    this.nome = prompt("Digite o nome do aluno:");
    const idadeInput: string | null = prompt("Digite a idade do aluno:");
    this.idade = idadeInput ? parseInt(idadeInput) : 0;

    // console.log("\nCursos disponíveis:");
    // Cursos.forEach((curso, index) => {
    //   console.log(`${index + 1}. ${curso.nome}`);
    // });

    const cursoEscolhidoInput: string | null = prompt(
      "Escolha o número do curso para o aluno:"
    );
    const cursoEscolhido: number = cursoEscolhidoInput
      ? parseInt(cursoEscolhidoInput)
      : 0;

    if (cursoEscolhido <= 0 || cursoEscolhido > this.cursos.length) {
      console.log("Curso inválido!");
      return;
    }

    // this.cursos = ;
  }

  consultar(): void {
    // Implementação da consulta
  }

  remover(): void {
    // Implementação da remoção
  }

  atualizar(): void {
    // Implementação da atualização
  }
}
