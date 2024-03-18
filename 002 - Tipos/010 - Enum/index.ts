//Obs, enum não eh necessáriamente um obj

enum EMes {
    Jan = "Janeiro", 
    Fev = "Fevereiro",
    Mar = "Março"
}

const pessoa: {nome: string, mesAniver: string} ={
    nome: "Davi",
    mesAniver: EMes.Mar,
}