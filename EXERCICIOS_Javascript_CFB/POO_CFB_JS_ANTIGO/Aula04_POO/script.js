'use strict'

//static

class Carro{ //criando uma classe

    static alerta=true

    constructor(cor, modelo, marca){
        this.modelo=modelo
        this.cor=cor
        this.marca=marca
        this.ligado=false
        this.km=0
        this.combustivel=10
    }

    info(){
        console.log(`Cor: ${this.cor}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Marca: ${this.marca}`)
        
        if (this.ligado == false){
            console.log('Carro Ligado')
        } else {
            console.log('Carro desligado')
        }

        console.log(`Quilometragem: ${this.km}`)
        console.log(`Porcentagem Combustivel: ${this.combustivel}%`)
        console.log(`Alerta ${Carro.alerta ? 'Sim' : 'Não'}`)
        console.log('--------------------------------------------------')
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

let carro1 = new Carro('vermelho', 'HRV', 'Honda') //instanciando objeto da classe carro 




/* carro1.cor = 'Preto' alterando atributo cor da classe carro */

/*carro1.info() chamando método info da classe carro */

// sempre que um novo objeto é instanciado
// automaticamente o método construtor da classe é chamado


let carro2 = new Carro('Azul', 'Golf', 'WOLKSVAGEN')
let carro3 = new Carro('Cinza', 'Camaro', 'GM')
let carro4 = new Carro('Branco', 'Lamborgini', 'Ferrari')

carro1.ligar()
carro3.ligar()

carro1.controlaAlerta(false)


carro1.info()
carro2.info()
carro3.info()
carro4.info()


document.body.innerText = 'Ola Mundo'