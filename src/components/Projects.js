import davgram from '../assets/projects/Davgram.png'
import davtion from '../assets/projects/Davtion.png'
import dblog from '../assets/projects/dblog.png'

const projects = { davgram, davtion, dblog }


class Projects extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
}

static get styles(){
    return /*css*/`
        :host{

    }
    `;
}

connectedCallback(){
    this.name = this.getAttribute('name');
     this.render();
}

render(){
    this.shadowRoot.innerHTML =/*html*/`
        <style>${Projects.styles}</style>
 <div class='projects'>
     <div class='containerProjects'>
        <img  src='${projects[this.name]}'  alt='${this.name}'    />  

     </div>
        <slot></slot>
</div>
    `;
}
}
customElements.define('projects-ui',Projects);