class Aluno {
  nome: string;
  matricula: string;

  constructor(nome: string, matricula: string) {
    this.nome = nome;
    this.matricula = matricula;
  }

  exibir(): void {
    console.log(`Nome: ${this.nome}, Matricula: ${this.matricula}`);
  }
}
class Turma {
  alunos:Aluno[] = [];

  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
}
listarAlunos(): void {
    for (const a of this.alunos) {
        a.exibir();
    } 
}
  
}
  
const a1 = new Aluno("Vinicius", "12314");
const g = new Turma();
g.adicionarAluno(a1);
g.listarAlunos();


