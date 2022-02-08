import './style.css'
import './src/components/Navbar'
import './src/components/SobreMi'
import './src/components/Tecnologias'
import './src/components/Projects'
import './src/components/MoreMe'
import './src/components/Socials'


// => DOM => HTML

//tecnlogias
const $moreTecnologias = document.querySelector('#moreTec')
const $btnMoreTecnologias = document.querySelector('#btnMoreTec')
// form contact
const $formContact = document.querySelector('#formContact')
const $alertForm = document.querySelector('#alertForm')

let snowMe = true
let snowTec = true

// eventos
$btnMoreTecnologias.addEventListener('click', () => {
    $btnMoreTecnologias.innerHTML = snowTec ? 'ver Menos' : 'ver más'
    if (snowTec) {
        snowTec = !snowTec
        return $moreTecnologias.classList.remove('moreTecnologias')
    }
    snowTec = !snowTec
    return $moreTecnologias.classList.add('moreTecnologias')
})

// validacion de los forumularios 

$formContact.addEventListener('submit', (evt) => {
    const name = evt.target[0].value || ' '
    const email = evt.target[1].value || ' '
    const message = evt.target[2].value || ' '

    if (name === ' ' || email === ' ' || message === ' ') {
        console.log(name, email, message)
        return $alertForm.innerHTML = 'Todos los campos son obligatorios'

    }

    $alertForm.innerHTML = ` gracaias ${name} por tu mensaje `

    setInterval(() => {
        $alertForm.innerHTML = ''
    }, 5000)
})