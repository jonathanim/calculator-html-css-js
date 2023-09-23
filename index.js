


const handleKeyPress = (value) => {

    if(Number.isNaN(value)){
        handleSymbol(value)
    }else {
        handleNumber(value)
    }
}
const handleSymbol = (value)=> {
    console.log(value)
}

const handleNumber =(value)=> {
    const changeToNumber = parseInt(value)
    console.log(changeToNumber)
}




function init() {
    const allkeybuttons = document.querySelectorAll('.cal-buttons')
    allkeybuttons.forEach(button => button.addEventListener("click", (e)=> handleKeyPress(e.target.innerText)))
}


init()