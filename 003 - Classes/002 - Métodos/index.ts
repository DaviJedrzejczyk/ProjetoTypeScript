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

const pessoa1 = new Pessoa("sd", 12)

console.log(pessoa1.comer("Sdasd"))
console.log(pessoa1.fezAniversario())


