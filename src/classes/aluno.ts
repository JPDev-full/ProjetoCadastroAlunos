import { Curso } from "../classes/curso.js";
import { cursos } from "../classes/curso.js";
import { prompt } from "../index.js";

export class Aluno {
  nome: string;
  idade: number;
  curso: Curso;

  constructor(nome: string, idade: number, curso: Curso) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
  }
}

const alunos: Aluno[] = [];

export const cadastrarAluno = (): void => {
  const nome: string | null = prompt("Digite o nome do aluno:");
  const idadeInput: string | null = prompt("Digite a idade do aluno:");
  const idade: number = idadeInput ? parseInt(idadeInput) : 0;

  console.log("\nCursos disponíveis:");
  cursos.forEach((curso, index) => {
    console.log(`${index + 1}. ${curso.nome}`);
  });

  const cursoEscolhidoInput: string | null = prompt(
    "Escolha o número do curso para o aluno:"
  );
  const cursoEscolhido: number = cursoEscolhidoInput
    ? parseInt(cursoEscolhidoInput)
    : 0;

  if (cursoEscolhido <= 0 || cursoEscolhido > cursos.length) {
    console.log("Curso inválido!");
    return;
  }

  const cursoAluno: Curso = cursos[cursoEscolhido - 1];

  const aluno: Aluno = new Aluno(nome || "", idade, cursoAluno);
  alunos.push(aluno);

  console.log("Aluno cadastrado com sucesso!");
};

export const consultarAluno = (): void => {};

export const removerAluno = (): void => {};

export const atualizarAluno = (): void => {};
