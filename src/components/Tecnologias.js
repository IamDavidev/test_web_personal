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
        img{
            width: 80px;
            height: 80px;
            margin: .3rem 1rem;
            object-fit: contain;
        }
        strong{
            color: #00f;
        }
        .tecnologias{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 10rem;
            margin: 1rem;
        }
        .ContainerTecnologias{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            margin: .5rem 0;
            border:1px solid #00f;
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