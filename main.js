import './style.css'
import './src/components/Navbar'
// import './src/components/MainWeb'
import './src/components/SobreMi'
import './src/components/Tecnologias'
import './src/components/Projects'


const $moreTecnologias = document.querySelector('#moreTec')
const $btnMoreTecnologias = document.querySelector('#btnMoreTec')


let snowMe = true
let snowTec = true


$btnMoreTecnologias.addEventListener('click',()=>{
    console.log(!snowTec)
    if(snowTec){
        snowTec = !snowTec
        return  $moreTecnologias.classList.remove('moreTecnologias')
    }
    snowTec = !snowTec
    return  $moreTecnologias.classList.add('moreTecnologias')
})