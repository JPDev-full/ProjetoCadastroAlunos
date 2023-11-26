export class Disciplina {
  nome: string;
  cargaHoraria: number;
  nota: number;

  constructor(nome: string, cargaHoraria: number, nota: number) {
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
    this.nota = nota;
  }
}

const disciplinas: Disciplina[] = [];

const cadastrarDisciplina = (): void => {};

const consultarDisciplina = (): void => {};

const removerDisciplina = (): void => {};

const atualizarDisciplina = (): void => {};
