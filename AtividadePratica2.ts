/* class Cliente{
    constructor(public nome: string, readonly cpf: string, private senha: string){}

    validarSenha(senha: string): boolean{
        return this.senha === senha;
    }
}
const c1 = new Cliente("Vinicius", "134.667.993-54", "4522p");
const c2 = new Cliente("DAvi",  "221.543.445-00", "1223");
console.log(c1.nome);
console.log(c1.validarSenha("452p"));
console.log(c2.nome);
console.log(c2.validarSenha("1223")); */
/* 
class Veiculo{
    constructor(public marca: string, public modelo: string, public ano: Number, private placa: string){}

    exibirDados(){
        console.log(`Marca; ${this.marca}, modelo; ${this.modelo}, ano ${this.ano}, placa; ${this.placa}`);
    }
}
const v1 = new Veiculo("Chevrolet", "Onix", 2022, "BGA-1V67");
const v2 = new Veiculo("Fiat", "PUlse", 2024, "RTJ-1K98");
v1.exibirDados();
v2.exibirDados(); */

abstract class Animal {
  constructor(public nome: string) {}

  abstract emitirSom(): void;

  apresentar(): void {
    console.log(`Meu Nome é ${this.nome}`);
  }
}

class Cachorro extends Animal {
  emitirSom(): void {
    console.log(`${this.nome} faz AU AU AU AU`);
  }
}

class Gato extends Animal {
  emitirSom(): void {
    console.log(`${this.nome} faz Miau Miau Miau`);
  }
}
const a1 = new Cachorro("Baltazar");
const a2 = new Gato("Gato kat");
a1.apresentar();
a1.emitirSom();
a2.apresentar();
a2.emitirSom();
