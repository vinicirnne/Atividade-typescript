/* class Funcionario{
    constructor(public nome: string, private salario: number){}

    getSalario(): Number{
        return this.salario;
    }

    setSalario(valor: number){
        if(valor < 1518){
            console.log(`Valor menor que o salario minimo vigente`);
            return;
        }
        console.log(`Seu salario é de ${this.salario.toFixed(2)}`);
    }

    exibirDados():void{
        console.log(`Funcionário ${this.nome}; Salario ${this.salario.toFixed(2)}`)
    }
}

const f = new Funcionario("Ricardo", 0);
const f2 = new Funcionario("Edgar", 0);
f.getSalario();
f.setSalario(1600);
 */

/* 
class Aluno{
    constructor(private nota: number){}

    getnota(): number{
        return this.nota;
    }

    setnota(): void{
        if(this.nota < 0 || this.nota > 10){
            console.log(`Nota ${this.nota} não aceita no sistema`);
        }else{
        console.log(`Nota ${this.nota} computada no sistema`);
        }
    }
}

const n1 = new Aluno(10);
n1.setnota(); */

class Carro{
    constructor(private velocidade: number = 0){}

    acelerar(c:number): void {
        this.velocidade += c;
        if(this.velocidade > 200) this.velocidade = 200;
        console.log(`Acelerando.. Velocidade atual: ${this.velocidade} KM\\h`);
    }
    
    frear(v: number): void{
        this.velocidade -= v;
        if(this.velocidade < 0 ) this.velocidade = 0;
        console.log(`Freando... Velocidade Atual: ${this.velocidade} KM\\h`)
    }
}
const v1 = new Carro();
v1.acelerar(150);
v1.frear(0);