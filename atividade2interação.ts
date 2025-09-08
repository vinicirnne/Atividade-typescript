class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Pedido {
  produtos: Produto[] = [];

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
    console.log(`Produto ${produto.nome} adicionado ao pedido.`);
  }

  removerProduto(produto: Produto): void {
    const remover = this.produtos.indexOf(produto);
    if (remover !== -1) {
      this.produtos.splice(remover, 1);
      console.log(`Produto ${produto.nome} removido do pedido.`);
    } else {
      console.log(`Produto ${produto.nome} não encontrado no pedido.`);
    }
  }

calcularTotal(): void{
    let total = 0;
    for(const p of this.produtos) {
        total += p.preco;
        console.log(`Total do pedido: R$ ${total.toFixed(2)}`);
    }
}
}
class livro {
    titulo: string;
    constructor(titulo: string){
        this.titulo = titulo;
    }
}
class biblioteca{
    livros: livro[] = [];
 adicionarLivro(livros: livro): void{
    this.livros.push(livros);
    console.log(`${livros.titulo} adicionado a biblioteca.`);

 }
buscarLivro(livros: livro): void{
    const buscar = this.livros.indexOf(livros);
    if(buscar !== -1){
        console.log(`${livros.titulo} encontrado na biblioteca.`);
    } else {
        console.log(`${livros.titulo} não encontrado na biblioteca.`);
    }       
}
}
const l1 = new livro("O senhor dos aneis");
const l2 = new livro("In to the pit");
const b = new biblioteca();
b.adicionarLivro(l1);
b.buscarLivro(l1);
const p1 = new Produto("O senhor dos aneis", 300);
const p2 = new Produto("In to the pit", 100);
const p = new Pedido();
p.adicionarProduto(p1);
p.adicionarProduto(p2);
p.calcularTotal();

