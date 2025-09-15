/* interface IVeiculo {
  marca: string;
  modelo: string;
  ligar(): void;
  desligar(): void;
}

class Carro implements IVeiculo {
  constructor(public marca: string, public modelo: string) {}
  ligar(): void {
    console.log(`${this.marca} ${this.modelo}, ligado vrummmm`);
  }
  desligar(): void {
    console.log(`${this.marca} ${this.modelo} desligando`);
  }
}

class Moto implements IVeiculo {
  constructor(public marca: string, public modelo: string) {}
  ligar(): void {
    console.log(`${this.marca} ${this.modelo} ligando Vrummmm`);
  }
  desligar(): void {
    console.log(`${this.marca} ${this.modelo} desligando`);
  }
}

const c1 = new Carro("Fiat", "Pulse");
const m1 = new Moto("Honda", "CG 160 TITAN");
c1.ligar();
c1.desligar();
m1.ligar();
m1.desligar();
 */


interface IAparelho{
    ligar():void;
    desligar():void;
}

class Televisão implements IAparelho{
    constructor(public televisão:string){}

    ligar():void{
        console.log(`${this.televisão} está ligando`);
    }
    desligar(): void {
        console.log(`Desligando ${this.televisão}`)
    }
}

class Celular implements IAparelho{
    constructor(public celular:string){}
    ligar(): void {
        console.log(`${this.celular} ligando`);
    }
    desligar(): void {
        console.log(`Desligando ${this.celular}`)
    }
}

const t1 = new Televisão("Semp Toshiba");
const c1 = new Celular("Iphone 14");
t1.ligar();
t1.desligar();
c1.ligar();
c1.desligar();