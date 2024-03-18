class Pessoa{
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
}
class Heranca extends Pessoa{
    private _profissao : string = "dev";
    
    constructor(){
        super("super", 23);
    }

    get profissao(){
        return this._profissao;
    }

    set profissao(valor:string){
        this.profissao = valor;
    }
}