
let startingValue = '0'
const screenValue = document.querySelector('#screenValue')

const handleKeyPress = (value) => {

    if(isNaN(value)){
        handleSymbol(value)
    }else {
        handleNumber(value)
    }

    refreshScreen()

}
const handleSymbol = (value)=> {
    console.log(value)

    switch(value) {
        case 'C':
            screenValue.innerText = 0
            break;
        case '←':
         
        case '÷':
            break;

        case '×':
            break;
        case '−':
            break;
        case '+':
            break;
        case '-':
            break;
    }
}

const handleNumber =(value)=> {
//     const convertToNumber = parseInt(value)
//     if(startingValue == '0'){
//         startingValue = value
//     ""
// working on logic
}


const refreshScreen =()=> {
    screenValue.innerText = startingValue
}

function init() {
    const allkeybuttons = document.querySelectorAll('.cal-buttons')
    allkeybuttons.forEach(button => button.addEventListener("click", (e)=> handleKeyPress(e.target.innerText)))

    
}


init()