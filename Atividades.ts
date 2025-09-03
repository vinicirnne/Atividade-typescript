class Cliente {
  nome: string;
  cpf: string;
  //Criação do construtor
  constructor(nome: string, cpf: string) {
    this.nome = nome;
    this.cpf = cpf;
  }
    //Metodo de saudação
  saudar(): void {
    console.log(`Ola ${this.nome} seu cpf é  ${this.cpf}`);
  }
}

const c1 = new Cliente("Jose", "223.453.466-56"); //Cria cliente 1
const c2 = new Cliente("Ana", "323.564.778-45"); // Cria cliente 2
//Executa saudação e imprimi nome + cpf
c1.saudar();
c2.saudar(); 