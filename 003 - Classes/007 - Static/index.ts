class Utils{
    static cloneObject(obj: Array<{}>){
        return JSON.parse(JSON.stringify(Object.assign(obj))); //Essa função feita nessa aula clona objetos a fundo
    }
}


const tenis1: {nome: string, tamanho: number} = {
    nome: "tenis1",
    tamanho: 12
}


const tenis2: {nome: string, tamanho: number} = {
    nome: "tenis2",
    tamanho: 3
}

console.log(Utils.cloneObject([tenis1, tenis2]))
