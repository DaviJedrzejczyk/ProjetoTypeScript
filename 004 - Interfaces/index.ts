interface IPessoa{
    nome: string;
    idade: number;

    readonly cpf: number;
}

const pess : IPessoa = {nome: "", idade: 12, cpf: 123123123} 


class Joao implements IPessoa{
    nome: string = "";
    idade: number = 2;
    cpf: number = 2;

}