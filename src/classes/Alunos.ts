import { Cursos } from "./Cursos";

export class Alunos {
  private alunos: Aluno[] = [];

  cadastrar(nome: string, idade: number, cursos?: Cursos[]): void {
    this.alunos.push({ nome, idade, cursos });
    console.log("Aluno cadastrado com sucesso!");
  }

  consultar(): void {
    console.log("Lista de Alunos:");
    this.alunos.forEach((aluno, index) => {
      console.log(`${index + 1}. Nome: ${aluno.nome}, Idade: ${aluno.idade}`);
    });
  }

  remover(index: number): void {
    index++;
    if (index <= 0 || index > this.alunos.length) {
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
    index++;
    if (index <= 0 || index > this.alunos.length) {
      console.log("Índice inválido!");
      return;
    }

    this.alunos[index] = { nome, idade, cursos };
    console.log("Aluno atualizado com sucesso!");
  }
}

export interface Aluno {
  nome: string;
  idade: number;
  cursos?: Cursos[];
}
