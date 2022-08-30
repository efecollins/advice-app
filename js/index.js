let dice = document.querySelector(".dice");

// store async function in a variable
const getAdvice = async () => {
    // get request through fetch
    const response = await fetch('https://api.adviceslip.com/advice').catch((error) => {
        console.error(error);
    });
    // parse json
    const adviceJSON = await response.json();
    // console.log(adviceJSON);
    document.querySelector('.id').innerHTML = adviceJSON.slip.id;
    document.querySelector('.quote').innerHTML = '"' + adviceJSON.slip.advice + '"';
}

dice.addEventListener("click", getAdvice);