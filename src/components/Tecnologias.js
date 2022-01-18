import lit from '../assets/icons/lit.svg'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import js from '../assets/icons/js.svg'
import mongodb from '../assets/icons/mongodb.svg'
import webC from '../assets/icons/webcomponents.svg'
import firebase from '../assets/icons/firebase.svg'
import react from '../assets/icons/react.svg'
import strapi from '../assets/icons/strapi.svg'
import graphql from '../assets/icons/graphql.svg'
import postcss from '../assets/icons/postcss.svg' 
const tecnologias = { lit, html, css, js, mongodb, webC, firebase, strapi, react,graphql,postcss }

class Tecnologias extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        strong{
            color: #ff00ff;
            text-transform:uppercase;
            font-weight:bold;
            border-bottom:1px solid #0ff;
        }
        .tecnologias{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 10rem;
            margin:  1rem 3rem;
        }
        .ContainerTecnologias > img{
            width: 80px;
            height: 80px;
            margin: auto 1rem;
            object-fit: contain;
            animation: fadeIn 4s infinite;
            z-index: -1;
        }
        .ContainerTecnologias{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            padding:0.3rem 1.5rem;
        }
        .name strong{
            color: #ff00ff;
            border-bottom:2px solid #ffc600;
            transition: all .4s ease-in-out;
        }
        @keyframes fadeIn {
            0% {transform: translateY(12px); }
            50% {transform: translateY(0px);}
            100% {transform: translateY(12px);}

        }
        @media(min-width:300px){
            .ContainerTecnologias{
                display:flex;
                flex-direction: column;
            }
            .ContainerTecnologias> img{
                margin-bottom:1rem;
            }
            .tecnologias{
                margin:1rem auto ;
            }
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
        <strong>
            ${this.name}
        </strong>
     </div>
        <slot></slot>
</div>
    `;
    }
}
customElements.define('tecnologias-ui', Tecnologias);