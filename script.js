const adviceNum = document.querySelector("#advice-num");
const adviceText = document.querySelector(".content_text");
const diceBtn = document.querySelector('.content_button');

const getAdvice = async () => {
    try{
        const res = await axios.get("https://api.adviceslip.com/advice");
        const slipId = res.data.slip.id;
        const slipAdvice = res.data.slip.advice;
        adviceNum.innerHTML = slipId;
        adviceText.innerHTML = '"' + slipAdvice + '"';
    } catch(e){
        alert("Something went wrong, please try again later.")
    }
    
}

diceBtn.addEventListener("click", getAdvice);