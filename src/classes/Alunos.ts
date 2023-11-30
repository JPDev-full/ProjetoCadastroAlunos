import { Cursos } from "./Cursos";

export class Alunos {
  private alunos: { nome: string; idade: number; cursos?: Cursos[] }[] = [];

  cadastrar(nome: string, idade: number, cursos?: Cursos[]): void {
    this.alunos.push({ nome, idade, cursos });
    console.log("Aluno cadastrado com sucesso!");
  }

  consultar(): void {
    console.log("Lista de Alunos:");
    this.alunos.forEach((aluno, index) => {
      console.log(
        `${index + 1}. Nome: ${aluno.nome}, Idade: ${
          aluno.idade
        }, Cursos: ${JSON.stringify(aluno.cursos)}`
      );
    });
  }

  remover(index: number): void {
    if (
      index < 0 ||
      index >= this.alunos.length ||
      index == undefined ||
      Number.isNaN(index)
    ) {
      console.log("Índice inválido!");
      return;
    }

    this.alunos.splice(index, 1);
    console.log("Aluno removido com sucesso!");
  }

  atualizar(
    index: number,
    nome: string,
    idade: number,
    cursos: Cursos[]
  ): void {
    if (
      index < 0 ||
      index >= this.alunos.length ||
      index == undefined ||
      Number.isNaN(index)
    ) {
      console.log("Índice inválido!");
      return;
    }

    this.alunos[index] = { nome, idade, cursos };
    console.log("Aluno atualizado com sucesso!");
  }

  obterAlunoPorIndice(index: number): any | undefined {
    if (
      index < 0 ||
      index >= this.alunos.length ||
      index == undefined ||
      Number.isNaN(index)
    ) {
      return undefined;
    }

    return this.alunos[index];
  }
}
