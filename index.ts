class Aluno {
    constructor(public nome: string, public idade: number, public curso: Curso) {}
}

class Disciplina {
    constructor(public nome: string, public cargaHoraria: number, public nota: number) {}
}

class Curso {
    constructor(public nome: string, public turno: string, public disciplinas: Disciplina[] = []) {}
}

const alunos: Aluno[] = [];
const disciplinas: Disciplina[] = [];
const cursos: Curso[] = [];

function cadastrarAluno(): void {
    const nome: string | null = prompt("Digite o nome do aluno:");
    const idadeInput: string | null = prompt("Digite a idade do aluno:");
    const idade: number = idadeInput ? parseInt(idadeInput) : 0;

    console.log("Cursos disponíveis:");
    cursos.forEach((curso, index) => {
        console.log(`${index + 1}. ${curso.nome}`);
    });

    const cursoEscolhidoInput: string | null = prompt("Escolha o número do curso para o aluno:");
    const cursoEscolhido: number = cursoEscolhidoInput ? parseInt(cursoEscolhidoInput) : 0;

    if (cursoEscolhido <= 0 || cursoEscolhido > cursos.length) {
        console.log("Curso inválido!");
        return;
    }

    const cursoAluno: Curso = cursos[cursoEscolhido - 1];

    const aluno: Aluno = new Aluno(nome || '', idade, cursoAluno);
    alunos.push(aluno);

    console.log("Aluno cadastrado com sucesso!");
}

function consultarAluno(): void {
}

function removerAluno(): void {
}

function atualizarAluno(): void {
}

function cadastrarDisciplina(): void {
}

function consultarDisciplina(): void {
}

function removerDisciplina(): void {
}

function atualizarDisciplina(): void {
}

function cadastrarCurso(): void {
}

function consultarCurso(): void {
}

function removerCurso(): void {
}

function atualizarCurso(): void {
}

while (true) {
    console.log("\nMENU:");
    console.log("1. Gerenciar ALUNOS");
    console.log("2. Gerenciar DISCIPLINAS");
    console.log("3. Gerenciar CURSOS");
    console.log("4. SAIR");

    const prompt = require("prompt-sync")()
    const opcaoMenu: string | null = prompt("Escolha uma opção:");

    if (opcaoMenu === '1') {
        while (true) {
            console.log("\nSUBMENU - Gerenciar ALUNOS:");
            console.log("1. Cadastrar ALUNO");
            console.log("2. Consultar ALUNO");
            console.log("3. Remover ALUNO");
            console.log("4. Atualizar ALUNO");
            console.log("5. Voltar ao MENU principal");

            const opcaoSubMenu: string | null = prompt("Escolha uma opção:");

            if (opcaoSubMenu === '1') {
                cadastrarAluno();
            } else if (opcaoSubMenu === '2') {
                consultarAluno();
            } else if (opcaoSubMenu === '3') {
                removerAluno();
            } else if (opcaoSubMenu === '4') {
                atualizarAluno();
            } else if (opcaoSubMenu === '5') {
                break;
            } else {
                console.log("Opção inválida!");
            }
        }
    }
}
