let dice = document.querySelector(".dice");

// store async function in a variable
const getAdvice = async () => {
    // get request through fetch
    const response = await fetch('https://api.adviceslip.com/advice');
    // parse json
    const adviceJSON = await response.json();
    // console.log(adviceJSON);
    document.querySelector('.id').innerHTML = adviceJSON.slip.id;
    document.querySelector('.quote').innerHTML = '"'+ adviceJSON.slip.advice +'"';
}

dice.addEventListener("click", getAdvice);

// function setAdvice() {
//     document.querySelector('.id').innerHTML = toString(adviceObject.slip.id);
    // document.querySelector('quote').innerHTML = toString(adviceObject.slip.advice);
// }

// setAdvice();
