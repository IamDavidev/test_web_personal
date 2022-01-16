import davgram from '../assets/projects/Davgram.png'
import davtion from '../assets/projects/Davtion.png'
import dblog from '../assets/projects/dblog.png'

const projects = { davgram, davtion, dblog }
const links = {
    davgram: 'https://davgram.herokuapp.com/',
    davtion: 'https://davtion.herokuapp.com/',
    dblog: 'https://davblog.herokuapp.com/'

}

class Projects extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        .containerProjects{
            margin: 1rem 0;
            padding; 1rem;
        }
        .renderProject{
         display:flex;
         justify-content:center;
         align-items:center;
         flex-direction:column
        
        }
        .renderProject > img{
            width: 300px;
        }
         
    `;
    }

    connectedCallback() {
        this.name = this.getAttribute('name');
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${Projects.styles}</style>
 <div class='projects'>
     <div class='containerProjects'>
     <a href='#' target='_blank'    >
        <div class='renderProject' >
            <img  src='${projects[this.name]}'  alt='${this.name}'    />  
                <strong>
                    ${this.name}
                </strong>
            </div>
     </a>

     </div>
        <slot></slot>
</div>
    `;
    }
}
customElements.define('projects-ui', Projects);