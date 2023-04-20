let page = document.body
let p_backg =  document.getElementById('backg')

function mudaCor() {


     
    let cor = generateColor()
    page.style.background = cor

    p_backg.innerHTML = `Background: ${cor}`

}

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }