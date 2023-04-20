'use strict'

class Carro{

    constructor(nome, tipo){

        this.nome = nome

        if (tipo == 1){

            this.tipo = 'esportivo'
            this.velMax =  300

        } else if (tipo == 2){

            this.tipo = 'utilitario'
            this.velMax = 300

        } else if (tipo == 3){

            this.tipo = 'Passeio'
            this.velMax = 100

        } else {

            this.tipo = 'militar'
            this.velMax = 180

        }

    }

    info(){

        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade: ${this.velMax}`)

    }

}

let carro1 = new Carro('Rapidao', 1)
let carro2 = new Carro('SuperLuxo', 3)
let carro3 = new Carro('Militar', 4)
let carro4 = new Carro('CarregoTudo', 2)

//console.log(carro1.nome)
//console.log(carro1.tipo)
//console.log(carro1.velMax)


//console.log(carro2.nome)
//console.log(carro3.nome)
//console.log(carro4.nome)

carro1.info()