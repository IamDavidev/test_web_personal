import davgram from '../assets/projects/Davgram.png'
import davtion from '../assets/projects/Davtion.png'
import dblog from '../assets/projects/dblog.png'

const projects = { davgram, davtion, dblog }
const links = {
    davgram: 'https://youthful-neumann-3d117c.netlify.app/explorehttps://davgram.herokuapp.com/',
    davtion: 'https://davtion.ga/',
    dblog: 'https://dblog.ga/'

}

class Projects extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        .containerProjects{
            margin: .4rem 0;
            padding: 1rem;
        }

        a{
            text-decoration:none;
        }

        .renderProject{
         display:flex;
         justify-content:center;
         align-items:center;
         flex-direction:column  ; 
        }

        .renderProject > img{
            border-radius:1rem;
            width: 300px;
            opacity: 0.6;
            transition: all .5s ease-in-out;
           
        }

        .renderProject > img:hover{
            opacity: 1;
        }
        
        .renderProject > strong{
            text-decoration:none;
            padding:1rem;
            color:#ff00ff;
            font-weight:bold;
            text-transform:uppercase
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
     <a href='${links[this.name]}' target='_blank'    >
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