class Funcionario{
    constructor(public nome: string, private salario: number, readonly id: string){}

    aumentarSalario(v: number) {
    this.salario += v;
    }
    exibirFuncionario(){
        console.log(`Funcionario ${this.nome}, Salario ${this.salario}`)
    }
    }
    const f1 = new Funcionario("Carlos", 400, "89 - C.");
    const f2 = new Funcionario("Vinicius", 600, "21 - V.");
    f1.aumentarSalario(450);
    f2.aumentarSalario(50);
    f1.exibirFuncionario();
    f2.exibirFuncionario();
