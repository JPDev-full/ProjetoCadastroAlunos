import { Disciplina } from "../disciplinas/disciplina.js";

export class Curso {
  nome: string;
  turno: string;
  disciplinas: Disciplina[] = [];

  constructor(nome: string, turno: string, disciplinas: Disciplina[] = []) {
    this.nome = nome;
    this.turno = turno;
    this.disciplinas = disciplinas;
  }
}

export const cursos: Curso[] = [];

const cadastrarCurso = (): void => {};

const consultarCurso = (): void => {};

const removerCurso = (): void => {};

const atualizarCurso = (): void => {};
