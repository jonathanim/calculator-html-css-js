


const handleKeyPress = (value) => {

    if(isNaN(value)){
        handleSymbol(value)
    }else {
        handleNumber(value)
    }
}
const handleSymbol = (value)=> {
    console.log(value)

    switch(value) {
        case 'C':
            screenValue.innerText = 0
            break;
        case '←':
            // do something
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
    const changeToNumber = parseInt(value)
    console.log(changeToNumber)
}




function init() {
    const allkeybuttons = document.querySelectorAll('.cal-buttons')
    allkeybuttons.forEach(button => button.addEventListener("click", (e)=> handleKeyPress(e.target.innerText)))

    const screenValue = document.querySelector('#screenValue')
}


init()