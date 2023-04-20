
const curses = ['HTML', 'CSS' , 'JavaScript', 'PHP', 'React']

/*


let c = curses.map(

    (item, index)=>{

        console.log(`Curso: ${item} - Posição ${index}`)

        return item

    }



) //Três Parãmetros (elemento, indice, array)

console.log(c)

*/

let divs = document.getElementsByTagName('div')

/*

divs = [...divs]

divs.map(

    (element, index)=>{

        console.log(element.innerHTML)

    }

)

*/


//Função Callback

//PEGANDO VALORES DAS DIVS COM MAP.CALL


const valuesDivs = Array.prototype.map.call(divs, ({innerHTML}) => innerHTML)


console.log(valuesDivs)


let numeros = ['1', '2', '3']

console.log(numeros)

let converterInt = n => parseInt(n)

console.log(numeros.map(converterInt))


