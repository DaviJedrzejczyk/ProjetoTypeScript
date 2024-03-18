const error = (msg :string): never =>{
    throw new Error(msg);
};

const loop = (): never => {
    while(true){
        console.log("Ola")
    }
};

const validade = (value : string | number) => {
    if (typeof value === "string") {
        return console.log("string")
    }else if(typeof value === "number"){
        return console.log("number")
    }

    console.log(error("Não eh numero nem string"))
}

validade("string")