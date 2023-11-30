import { Disciplinas } from "../classes/Disciplinas.js";

export class Cursos {
  private cursos: {
    nome: string;
    turno: string;
    disciplinas?: Disciplinas[];
  }[] = [];

  cadastrar(nome: string, turno: string, disciplinas?: Disciplinas[]): void {
    this.cursos.push({ nome, turno, disciplinas });
    console.log("Curso cadastrado com sucesso!");
  }

  consultar(): void {
    console.log("Cursos Disponiveis:");
    this.cursos.forEach((curso, index) => {
      console.log(
        `${index + 1}. Nome: ${curso.nome}, Turno: ${
          curso.turno
        }, Disciplinas: ${JSON.stringify(curso.disciplinas)}`
      );
    });
  }

  remover(index: number): void {
    if (
      index < 0 ||
      index >= this.cursos.length ||
      index == undefined ||
      Number.isNaN(index)
    ) {
      console.log("Índice inválido!");
      return;
    }

    this.cursos.splice(index, 1);
    console.log("Curso removido com sucesso!");
  }

  atualizar(
    index: number,
    nome: string,
    turno: string,
    disciplinas?: Disciplinas[]
  ): void {
    if (
      index < 0 ||
      index >= this.cursos.length ||
      index == undefined ||
      Number.isNaN(index)
    ) {
      console.log("Índice inválido!");
      return;
    }

    this.cursos[index] = { nome, turno, disciplinas };
    console.log("Curso atualizado com sucesso!");
  }

  obterCursoPorIndice(index: number): any | undefined {
    if (
      index < 0 ||
      index >= this.cursos.length ||
      index == undefined ||
      Number.isNaN(index)
    ) {
      return undefined;
    }

    return this.cursos[index];
  }
}
