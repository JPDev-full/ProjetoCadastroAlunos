export class Disciplinas {
  private disciplinas: {
    nome: string;
    cargaHoraria: number;
    nota?: number | string;
  }[] = [];

  cadastrar(nome: string, cargaHoraria: number, nota?: number | string): void {
    if (nota == "") {
      nota = "Sem nota";
    }
    this.disciplinas.push({ nome, cargaHoraria, nota });
    console.log("Disciplina cadastrada com sucesso!");
  }

  consultar(): void {
    console.log("Disciplinas Disponiveis:");
    this.disciplinas.forEach((disciplina, index) => {
      console.log(
        `${index + 1}. Nome: ${disciplina.nome}, Carga Horária: ${
          disciplina.cargaHoraria
        }, Nota: ${disciplina.nota}`
      );
    });
  }

  remover(index: number): void {
    if (
      index < 0 ||
      index >= this.disciplinas.length ||
      index == undefined ||
      Number.isNaN(index)
    ) {
      console.log("Índice inválido!");
      return;
    }

    this.disciplinas.splice(index, 1);
    console.log("Disciplina removida com sucesso!");
  }

  atualizar(
    index: number,
    nome: string,
    cargaHoraria: number,
    nota?: number | string
  ): void {
    if (nota == "") {
      nota = "Sem nota";
    }
    this.disciplinas[index] = { nome, cargaHoraria, nota };
    console.log("Disciplina atualizada com sucesso!");
  }

  obterDisciplinaPorIndice(index: number): any | undefined {
    if (
      index < 0 ||
      index >= this.disciplinas.length ||
      index == undefined ||
      Number.isNaN(index)
    ) {
      return undefined;
    }

    return this.disciplinas[index];
  }
}
