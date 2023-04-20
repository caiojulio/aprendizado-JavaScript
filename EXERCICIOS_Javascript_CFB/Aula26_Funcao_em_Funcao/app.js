
const soma = (...valores) => {

    const somar = arrayValores => {

        let s = 0

        for (let item of arrayValores){

            s += item

        }

        return s

    }

    return somar(valores)

}

n = 25 << 1

let teste = soma(10, 20, 30, 40, n)

console.log(teste)