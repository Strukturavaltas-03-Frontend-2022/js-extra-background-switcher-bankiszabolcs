const circles = document.querySelectorAll('.circle')
const circleArr = Array.from(circles)
const body = document.querySelector('body')

circleArr.forEach(element => {
    element.addEventListener('click', (e)=>{
       body.style.backgroundColor = e.target.classList[1]
    })
})