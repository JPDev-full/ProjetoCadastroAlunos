export class Disciplinas {
  private disciplinas: Disciplina[] = [];

  cadastrar(nome: string, cargaHoraria: number, nota: number | string): void {
    if (nota == "") {
      nota = "Sem nota";
    }
    this.disciplinas.push({ nome, cargaHoraria, nota });
    console.log("Disciplina cadastrada com sucesso!");
  }

  consultar(): void {
    console.log("Lista de Disciplinas:");
    this.disciplinas.forEach((disciplina, index) => {
      console.log(
        `${index + 1}. Nome: ${disciplina.nome}, Carga Horária: ${
          disciplina.cargaHoraria
        }, Nota: ${disciplina.nota}`
      );
    });
  }

  remover(index: number): void {
    if (index < 0 || index >= this.disciplinas.length) {
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
    nota: number | string
  ): void {
    if (index < 0 || index >= this.disciplinas.length) {
      console.log("Índice inválido!");
      return;
    }
    if (nota == "") {
      nota = "Sem nota";
    }

    this.disciplinas[index] = { nome, cargaHoraria, nota };
    console.log("Disciplina atualizada com sucesso!");
  }
}

export interface Disciplina {
  nome: string;
  cargaHoraria: number;
  nota: number | string;
}
