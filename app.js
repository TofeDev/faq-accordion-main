const block = document.querySelectorAll('.block')
const question = document.querySelectorAll('.question')

question.forEach( (eachQuestion, i) => {
    question[i].addEventListener('click', ()=>{
        block.forEach((eachBlock, i)=> {
            block[i].classList.remove('active')
        })
        block[i].classList.add('active')
    })
})