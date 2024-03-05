 const button = document.querySelector('.button')
//  const closeIcon = document.querySelector('.close-icon')
  const popup = document.querySelector('.popup')
  const buttonP = document.querySelector(".button-2")
  const pop = document.querySelector(".pop")
  const emailInput = document.getElementById("emailInput");
    const errorMessage = document.getElementById("error")
    const field =document.querySelector(".field")
  
//  const popupContainer = document.querySelector('.popup-container')
//  const sub = document.querySelector(".button")

// button.addEventListener('click', () => {
//     popupContainer.classList.add('popup-open')
//     popupContainer.classList.add('popup-open')
// })

// closeIcon.addEventListener('click', () => {
//     popupContainer.classList.remove('popup-open')
//     popupContainer.classList.remove('popup-open')
// })

// popup.addEventListener('click', (e) => {
//     e.stopPropagation()
// })

// popupContainer.addEventListener('click', () => {
//     popupContainer.classList.remove('popup-open')
//     popupContainer.classList.remove('popup-open')
// })
buttonP.addEventListener('click',(e)=>{
pop.classList.add('button-2')

})

button.addEventListener("click",(e)=>{
    // console.log("i")
    if (emailInput.value.trim() === "") {
        errorMessage.style.display = "block";
    
    } else {
        popup.classList.add('close');
        // errorMessage.style.display = "none";
    }

 })
 field.addEventListener("input",(e)=>{
    errorMessage.style.display = "none";

 })