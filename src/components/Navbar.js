import logo from '../assets/itsdavidev.svg'

class Nabar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
            img{
                width: 50px;
            }
            nav{
                display:flex;
                justify-content: space-around;
                align-items: center;
                background-color: #f2f2f2;
                margin: 0 5rem 
            }
            ul{
                list-style:none;
                display:flex;
                justify-content: space-around;
                align-items: center;
            }
            li{
                margin: 0 1rem;
                text-decoration:none;
            }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${Nabar.styles}</style>
 <div>
     <div>
        <nav>
            <div  className="logo">
             <img src=${logo}  alt='itsdavidev logo davidev '/>
            </div>
            <div className="navLinks">
                     <ul>
                        <li><a href="#"> Principal </a></li>
                        <li><a href="#">  Sobre mi  </a></li>
                        <li><a href="#"> Tecnologias </a></li>
                     </ul>
            </div>
        </nav>
     
     </div>
        <slot></slot>
</div>
    `;
    }
}
customElements.define('navbar-ui', Nabar);