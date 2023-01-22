const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')
const removeColorBtn = document.querySelector('.remove-color')
const colorDiv = document.querySelector('.color')

function redColor(){
    colorDiv.classList.add('red')
    colorDiv.classList.remove('blue')
}
function blueColor(){
    colorDiv.classList.add('blue')
    colorDiv.classList.remove('red')
}
function colorRemover(){
    colorDiv.classList.remove('red','blue')
}

btn1.addEventListener('click', redColor)
btn2.addEventListener('click', blueColor)
removeColorBtn.addEventListener('click', colorRemover)
