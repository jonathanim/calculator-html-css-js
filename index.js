
let startingValue = '0'
let total = 0
let firstOperator;
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
            screenValue.innerText = '0'
            break;
        case '←':
            if(startingValue.length === 1){
                startingValue = '0'
            }else {
                startingValue = startingValue.substring(0, startingValue.length -1)
            }
        case '÷':
            break;

        case '×':
            break;
        case '−':
            break;
        case '+':
           
            break;
        case '=':
            break;
    }
}

const handleCalculations = (value)=> {
    if(startingValue == '0'){
        return;
    }
    const changeToNumber = parseInt(value)
    if(total == 0){
        total = changeToNumber
    }else {
        doMath(changeToNumber)
    }
    firstValue = value;
    startingValue = '0'
}

const doMath=(IntValue)=>{
    if(firstValue == '+'){
        total+= changeToNumber
    }
    else if(firstValue == '−'){
        total-= changeToNumber
    }
    else if(firstValue == '×'){
        total*= changeToNumber
    }
    else if(firstValue == '÷'){
        total/= changeToNumber
    }
   
}

const handleNumber =(value)=> {
    
    if(startingValue === '0'){
        startingValue = value;
    }else {
        startingValue+= value;
    }
}


const refreshScreen =()=> {
    screenValue.innerText = startingValue
}

function init() {
    const allkeybuttons = document.querySelectorAll('.cal-buttons')
    allkeybuttons.forEach(button => button.addEventListener("click", (e)=> handleKeyPress(e.target.innerText)))

}


init()