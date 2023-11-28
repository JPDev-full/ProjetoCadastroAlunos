import PromptSync from "prompt-sync";
import { Alunos } from "../classes/Alunos.js";
import { Cursos } from "../classes/Cursos.js";
import { Disciplinas } from "../classes/Disciplinas.js";

export const prompt = PromptSync();
export const alunosManager = new Alunos();
export const cursosManager = new Cursos();
export const disciplinasManager = new Disciplinas();
