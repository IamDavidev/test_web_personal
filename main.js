import './style.css'
import './src/components/Navbar'
// import './src/components/MainWeb'
import './src/components/SobreMi'
import './src/components/Tecnologias'
import './src/components/Projects'
import './src/components/MoreMe'

//sobre mi 
const $moreMe = document.querySelector('#moreMe')
const $btnMoreMe = document.querySelector('#btnMoreMe')



//tecnlogias
const $moreTecnologias = document.querySelector('#moreTec')
const $btnMoreTecnologias = document.querySelector('#btnMoreTec')




let snowMe = true
let snowTec = true

// eventos
$btnMoreTecnologias.addEventListener('click',()=>{
    $btnMoreTecnologias.innerHTML = snowTec ? 'ver Menos' : 'ver más'
    if(snowTec){
        snowTec = !snowTec
        return  $moreTecnologias.classList.remove('moreTecnologias')
    }
    snowTec = !snowTec
    return  $moreTecnologias.classList.add('moreTecnologias')
})

$btnMoreMe.addEventListener('click',()=> {
    $btnMoreMe.innerHTML = snowMe ? 'ver Menos' : 'ver más'
    if(snowMe){
        snowMe = !snowMe
        return  $moreMe.classList.remove('moreMe')
    }
    snowMe = !snowMe
    return  $moreMe.classList.add('moreMe')
})