
const idades = [15, 21, 30, 17, 18, 44, 12, 50]

const maior = idades.filter(element=>{

    if (element >= 18){
        return element
    }


})

const menor = idades.filter(element=>{

    if (element < 18){
        return element
    }


})


console.log(idades)
console.log(maior)
console.log(menor)

