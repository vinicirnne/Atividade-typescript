class Endereco {
rua: string;
numero: Number;
cidade: string;
constructor(rua: string, numero: Number, cidade: string){
this.rua = rua;
this.numero = numero;
this.cidade = cidade;

}

formatar(){
console.log(`Rua; ${this.rua}, Numero; ${this.numero}, cidade; ${this.cidade}`);
}
}
const e1 = new Endereco("Valdemar peixoto",34, "Taboão da serra");
const e2 = new Endereco("Ernesto de souza", 56, "Xique xique");
e1.formatar();
e2.formatar();


class pedido{
id: string;
total: number;
constructor(id:string){
this.id = id; //this.id puxa o ID vindo do constructor  
this.total = 0;//this.total = 0 nçao precisa puxar nada do constructor pois ja esta pre definido como 0
}
adicionaValor(v: number): void {
    this.total += v; 
console.log(`id= ${this.id} ,Total; ${this.total}`);//this.id e this.total serão imprimidos no metodo
}
}
const p1 = new pedido("DDQEBHQ");
p1.adicionaValor(12);
p1.adicionaValor(5);