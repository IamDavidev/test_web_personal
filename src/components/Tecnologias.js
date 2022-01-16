import lit from '../assets/icons/lit.svg'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import js from '../assets/icons/js.svg'
import monngodb from '../assets/icons/mongodb.svg'
import webcomponents from '../assets/icons/webcomponents.svg'
import firebase from '../assets/icons/firebase.svg'
import react from '../assets/icons/react.svg'
import strapi from '../assets/icons/strapi.svg'

const tecnologias = { lit, html, css, js, monngodb, webcomponents, firebase, strapi, react }

class Tecnologias extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        strong{
            color: #FFC600;
        }
        .tecnologias{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 10rem;
            margin:  1rem 2rem;
        }
        .ContainerTecnologias > img{
            width: 80px;
            height: 80px;
            margin: .3rem 1rem;
            object-fit: contain;
            animation: fadeIn 5s infinite;
            z-index: -1;
     -webkit-transform: rotate(45deg);
     -moz-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     -o-transform: rotate(45deg);
     transform: rotate(45deg);
        }
        .ContainerTecnologias{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            margin: .5rem 1rem;
            border-bottom:1px solid #1DB9C3;
            border-radius:1rem;
            padding:1rem;

        }

        .name strong{
            text-transform: uppercase;
            font-size: 1.3rem;
            border-bottom: 1px solid #1db9c3;
            transition: all .4s ease-in-out;
        }
        .name strong:hover{
            color: #1DB9C3;
            border-bottom:2px solid #ffc600;
        }
        @keyframes fadeIn {
            0% {transform: translateY(10px); }
            50% {transform: translateY(0px);}
            100% {transform: translateY(10px);}

        }
    `;
    }


    connectedCallback() {
        this.name = this.getAttribute('name');
        this.render();
    }

    render() {
        const name = this.name;
        this.shadowRoot.innerHTML =/*html*/`
        <style>${Tecnologias.styles}</style>
 <div class='tecnologias'>
     <div class='ContainerTecnologias'>
        <img  src='${tecnologias[this.name]}' alt=${this.name}   />
        <div class='name'>   
            <strong>
                ${this.name}
            </strong>    
        </div>
     </div>
        <slot></slot>
</div>
    `;
    }
}
customElements.define('tecnologias-ui', Tecnologias);