class Usuario{
    constructor(public nome: string, private email: string){}

}

class Livro{
    constructor(public titulo: string, public autor: string, public ano: number){}
    }

class Emprestimo {   
    livros: Livro[];
    data: string;
    usuario: Usuario;
    constructor(data:string, usuario: Usuario){
        this.livros = [];
        this.data = data;
        this.usuario = usuario;
    }


    adicionar(livro: Livro):void{
        this.livros.push(livro);
        console.log(`${livro.titulo} adicionado`);
    }
    emprestimo():void{
        console.log(`${this.usuario.nome} possui:`)
        this.livros.forEach((livro, index) => {
            console.log(
            `Livro: ${index + 1}: ${livro.titulo}(${livro.autor}|${livro.ano}) para devolver ${this.data}`
            )
        });
    }
}

const u1 = new Usuario("Vini", "quattro@email.com");
const l1 = new Livro("Narnia", "fulano", 1999);
const l2 = new Livro("Cronicas de SpiderWick", "Tony DiTerlizzi", 2008)
const e1 = new Emprestimo("11/09", u1);
const e2 = new Emprestimo("4/4", u1)
e1.adicionar(l1)
e1.emprestimo();