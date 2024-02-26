let adviceId = document.getElementById("adviceId");
let adviceText = document.getElementById("adviceText");
let btnEle = document.getElementById("adviceBtn");

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response =>{
      return response.json()
      console.log(response.json())
}).then(data => {
    const adviceNum = data.slip.id;
    const advice = data.slip.advice;
    adviceId.textContent = adviceNum;
    adviceText.innerHTML = advice;
}).catch(error => {
    console.log(error);
})
}

btnEle.addEventListener("click",function(){
    getAdvice();
})

window.onload = () =>{
    getAdvice();
}