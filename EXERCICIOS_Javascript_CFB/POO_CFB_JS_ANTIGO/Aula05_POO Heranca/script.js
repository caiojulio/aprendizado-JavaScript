'use strict'

//herança

class Carro{ //criando uma classe

    static alerta=true

    constructor(tipoCarro, tipoCombustivel){
        this.tipoCarro = tipoCarro
        this.ligado=false
        this.tipoCombustivel=tipoCombustivel
        this.combustivel=10
    }

    info(){
        
        if (this.ligado == false){
            console.log('Carro Ligado')
        } else {
            console.log('Carro desligado')
        }

        if (this.tipoCarro == 1){
            console.log('Tipo do Carro: Combate')
        } else if (this.tipoCarro == 2){
            console.log('Tipo do Carro: Transporte')
        }

        console.log(`Tipo de combustivel: ${this.tipoCombustivel}`)
        console.log(`Porcentagem Combustivel: ${this.combustivel}%`)
        console.log(`Alerta ${Carro.alerta ? 'Sim' : 'Não'}`)
    }

    ligar(){
        this.ligado=true
    }

    desligar(){
        this.ligado=false
    }

    controlaAlerta(msg){
        Carro.alerta=msg
    }

}

class CarroCombate extends Carro{

    constructor(potenciaTiro){
        super(1,3)
        this.tiros = 1000
        this.potenciaTiro = potenciaTiro
        this.blindagem = 100
    }

    info(){
        super.info()
        console.log(`Munição: ${this.tiros}`)
        console.log(`Potencia de Tiro: ${this.potenciaTiro}`)
        console.log(`Blindagem: ${this.blindagem}`)
        console.log('--------------------------------------------------')
    }

}

class CarroTransporte extends Carro{

    constructor(){
        super(2,1)
    }

}

let carro_combate = new CarroCombate(250) //instanciando objeto da classe carro 
let carro_transporte = new CarroTransporte()

carro_combate.info()
carro_transporte.info()




/* carro1.cor = 'Preto' alterando atributo cor da classe carro */

/*carro1.info() chamando método info da classe carro */

// sempre que um novo objeto é instanciado
// automaticamente o método construtor da classe é chamado

/*

let carro2 = new Carro()
let carro3 = new Carro()
let carro4 = new Carro()


carro1.info()
carro2.info()
carro3.info()
carro4.info()


*/

document.body.innerText = 'Ola Mundo'