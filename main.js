import './style.css'
import './src/components/Navbar'
import './src/components/SobreMi'
import './src/components/Tecnologias'
import './src/components/Projects'
import './src/components/MoreMe'
import './src/components/Socials'


// => DOM => HTML
//sobre mi 
const $moreMe = document.querySelector('#moreMe')
const $btnMoreMe = document.querySelector('#btnMoreMe')

//tecnlogias
const $moreTecnologias = document.querySelector('#moreTec')
const $btnMoreTecnologias = document.querySelector('#btnMoreTec')
// form contact
const $formContact = document.querySelector('#formContact')
const $alertForm = document.querySelector('#alertForm')

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

// validacion de los forumularios 

$formContact.addEventListener('submit',(evt)=> {
    evt.preventDefault()
    const name = evt.target[0].value || ' '
    const email = evt.target[1].value || ' '
    const message = evt.target[2].value || ' '

    if(name === ' ' || email === ' ' || message === ' '){
        console.log(name,email,message)
       return  $alertForm.innerHTML = 'Todos los campos son obligatorios'
        
    }

        $alertForm.innerHTML = ` gracaias ${name} por tu mensaje ` 
        // console.log(name,email,message)
        
   setInterval(()=>{
         $alertForm.innerHTML = ''
   },5000)
})