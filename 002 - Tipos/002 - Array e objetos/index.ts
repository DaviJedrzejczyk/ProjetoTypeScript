// let array : [string] = ["teas", "sda"] //Para que possa ter um ou mais valores dentro desse tipo de array, deve se por na tipagem qual o tipo e pra quantidade repetir
                                          //o tipo de valor que voce quer no array EX: let array : [string, string] = ["teas", "sda"] 

let array2: Array<string> = ["paowd", "aoiwdj"] // dessa forma eh possivel criar um array com valores "infinitos", o ultimo eh com valores definidos

let array3: Array<string | number | boolean> = ["paowd", "aoiwdj"] //dessa forma eh possivel botar outros tipos dentro do array, sem se preocupar se devem estar ali
                                                                   //ou nao, e não eh obrigatorio por algum desses tipos no array.

let obj1: {nome: string, sobrenome:string} = {nome: "", sobrenome: ""} //Isso eh um objeto tipado e definido oque deve ser passado nele

let obj2: Array<{nome: string, sobrenome:string}> = [{nome: "", sobrenome: ""}]
