abstract class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }


    comer(comida: string){
        return `O ${this.nome} comeu ${comida}`;
    }

    fezAniversario(){
        return `O ${this.nome} fez tantos anos ${++this.idade}`;
    }

    protected abstract profissao: string;
}
class Heranca extends Pessoa{
    protected profissao: string = "prodi"
   
    constructor(){
        super("super", 23);
    }
}