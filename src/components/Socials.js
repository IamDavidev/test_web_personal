import likedin from '../assets/socials/likedin.svg'
import github from '../assets/socials/github.svg';
import twitter from '../assets/socials/twitter.svg';
import instagram from '../assets/socials/instagram.svg';

const socials = {
    likedin,
    github,
    twitter,
    instagram
}
const hrefsociale ={
    likedin: 'https://www.linkedin.com/in/david-lezama-a81741219/',
    github:'https://github.com/itsDavidev',
    twitter:'https://twitter.com/itsDavidev',
    instagram:'https://www.instagram.com/itsdavidev/'
}



class Socials extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
}

static get styles(){
    return /*css*/`
    .socials{
     margin: .4rem 1rem; 
    }
       img{
              width: 50px;
       } 
    `;
}

connectedCallback(){
    this.name = this.getAttribute('name')
     this.render();
}

render(){
    this.shadowRoot.innerHTML =/*html*/`
        <style>${Socials.styles}</style>
 <div class='socials'>
     <div class='ContainerSocials'>
        <a href='${hrefsociale[this.name]}' target='_blank'>
           <img  src='${socials[this.name]}'/>
        </a>
     </div>
        <slot></slot>
</div>
    `;
}
}
customElements.define('social-ui',Socials);