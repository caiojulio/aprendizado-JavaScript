'use strict'


class Carro{ //criando uma classe

    constructor(cor){
        this.cor = cor

        console.log(`Ola, sou um novo carro ${this.cor}`)
    }

}

let carro1 = new Carro('vermelho') //instanciando objeto da classe carro 


// sempre que um novo objeto é instanciado
// automaticamente o método construtor da classe é chamado


let carro2 = new Carro('Azul')
